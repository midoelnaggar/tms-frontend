"use client";
import Button from "@/components/Button";
import LogoutIcon from "@/components/icons/LogoutIcon";
import Logo from "@/components/Logo";
import NewTaskForm from "@/components/NewTaskForm";
import ResponsiveContainer from "@/components/ResponsiveContainer";
import Task from "@/components/Task";
import Title from "@/components/Title";
import { axiosInstance } from "@/services";
import { AppDispatch, AppState } from "@/store";
import { resetTasks } from "@/store/slices/tasksSlice";
import { logout } from "@/store/slices/userSlice";
import { getTasksThunk } from "@/store/thunks/tasksThunks";
import {
  FormControl,
  IconButton,
  InputLabel,
  LinearProgress,
  MenuItem,
  Modal,
  Select,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const [addingTask, setAddingTask] = useState(false);
  const [sortBy, setSortBy] = useState<SortType>("marked");
  const [statusFilter, setStatusFilter] = useState<StatusType>("all");
  const [tasks, setTasks] = useState<Task[]>([]);

  const { userData } = useSelector((state: AppState) => state.user);
  const {
    tasks: allTasks,
    listLoading,
    loading,
  } = useSelector((state: AppState) => state.tasks);

  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (userData?.token) {
      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${userData?.token}`;
      dispatch(getTasksThunk());
    } else {
      axiosInstance.defaults.headers.common["Authorization"] = undefined;
      router.replace("/login");
    }
  }, [userData?.token]);

  useEffect(() => {
    if (userData === null) {
      router.replace("/auth");
    }
  }, [userData]);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(resetTasks());
  };

  const closeAddingModal = () => {
    setAddingTask(false);
  };

  useEffect(() => {
    if (!!allTasks) {
      const filteredTasks: Task[] = allTasks.filter((task) => {
        switch (statusFilter) {
          case "all":
            return true;
          case "marked":
            return task.completed;
          case "unmarked":
            return !task.completed;
          default:
            return false;
        }
      });
      const sortedTasks = [...filteredTasks].sort((a, b) => {
        if (sortBy === "date") {
          return (
            new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
          );
        }
        if (sortBy === "title") {
          return a.title.localeCompare(b.title);
        }
        if (sortBy === "marked") {
          return Number(a.completed) - Number(b.completed);
        }
        return 0;
      });
      setTasks(sortedTasks);
    }
  }, [statusFilter, sortBy, allTasks]);

  return (
    <div>
      <div className="flex h-20 w-full items-center justify-between gap-10 bg-white px-32 shadow lg:gap-6 lg:px-16 md:gap-4 md:px-8 sm:gap-4 sm:px-4">
        <Logo />
        <div className="flex items-center gap-4">
          <h1 className="font-medium cursor-default text-end">
            {userData?.name}
          </h1>
          <IconButton onClick={handleLogout}>
            <LogoutIcon className="rotate-180" />
          </IconButton>
        </div>
      </div>
      {listLoading && <LinearProgress />}
      <ResponsiveContainer className="flex flex-col gap-4">
        <div className="flex items-center gap-4 md:flex-col">
          <Title className="text-primary-900 text-3xl">Tasks</Title>
          {!!allTasks.length && (
            <div className="flex items-center gap-4 grow justify-end md:order-3">
              <FormControl className="w-32">
                <InputLabel id="sort-select-label">Sort by</InputLabel>
                <Select
                  labelId="sort-select-label"
                  label="Sort by"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortType)}
                >
                  <MenuItem value="date">Date</MenuItem>
                  <MenuItem value="title">Title</MenuItem>
                  <MenuItem value="marked">Marked</MenuItem>
                </Select>
              </FormControl>
              <FormControl className="w-32">
                <InputLabel id="status-select-label">Status</InputLabel>
                <Select
                  labelId="status-select-label"
                  label="Status"
                  value={statusFilter}
                  onChange={(e) =>
                    setStatusFilter(e.target.value as StatusType)
                  }
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="marked">Marked</MenuItem>
                  <MenuItem value="unmarked">Unmarked</MenuItem>
                </Select>
              </FormControl>
            </div>
          )}
          <Button
            className="ms-auto md:ms-0 md:order-2"
            onClick={() => setAddingTask(true)}
          >
            New
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          {!!allTasks.length ? (
            tasks.map((task) => <Task key={task.id} task={task} />)
          ) : (
            <Title className="mx-auto">No tasks to show!</Title>
          )}
        </div>
      </ResponsiveContainer>
      <Modal
        className="flex items-center justify-center"
        open={addingTask}
        onClose={closeAddingModal}
      >
        <NewTaskForm closeModal={closeAddingModal} loading={loading} />
      </Modal>
    </div>
  );
}
