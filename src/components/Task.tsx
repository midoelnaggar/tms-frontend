import { useState } from "react";
import { AppDispatch } from "@/store";
import { useDispatch } from "react-redux";
import { deleteTaskThunk, updateTaskThunk } from "@/store/thunks/tasksThunks";
import moment from "moment";
import DeleteIcon from "./icons/DeleteIcon";
import { Checkbox, IconButton } from "@mui/material";

interface Props {
  task: Task;
}
export default function Task({ task }: Props) {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const handleCheckClick = async () => {
    setLoading(true);
    await dispatch(
      updateTaskThunk({ id: task.id, isCompleted: !task.completed })
    );
    setLoading(false);
  };

  const handleDeleteClick = async () => {
    setLoading(true);
    await dispatch(deleteTaskThunk({ id: task.id }));
    setLoading(false);
  };
  return (
    <div className="flex items-center gap-4 rounded border border-gray-200 px-4 py-3 text-sm outline-primary-600">
      <Checkbox
        checked={task.completed}
        onClick={handleCheckClick}
        className={`${loading ? "opacity-50 pointer-events-none" : ""}`}
      />
      <div className="flex flex-col">
        <h3
          className={`text-xl font-bold text-primary-900 ${
            task.completed ? "line-through" : ""
          }`}
        >
          {task.title}
        </h3>
        <p className={`text-gray-600 ${task.completed ? "line-through" : ""}`}>
          {task.description}
        </p>
      </div>
      <p className="ms-auto font-medium">
        {moment(task.created_at).format("DD MMM YYYY, h:mm:ss A")}
      </p>
      <IconButton
        className={`${loading ? "opacity-50 pointer-events-none" : ""}`}
        onClick={handleDeleteClick}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );
}
