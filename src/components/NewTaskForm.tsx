import { useFormik } from "formik";
import Container from "./Container";
import Title from "./Title";
import InputText from "./InputText";
import InputMultiline from "./InputMultiline";
import Button from "./Button";
import { createTaskSchema } from "@/validation/schemas";
import { AppDispatch } from "@/store";
import { useDispatch } from "react-redux";
import { createTaskThunk } from "@/store/thunks/tasksThunks";
import LoadingOverlay from "./LoadingOverlay";

interface Props {
  closeModal: () => void;
  loading: boolean;
}

export default function NewTaskForm({ closeModal, loading }: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const formik = useFormik<CreateTaskPayload>({
    initialValues: {
      title: "",
    },
    validationSchema: createTaskSchema,
    onSubmit: async (values) => {
      const res = await dispatch(createTaskThunk(values));
      if (res.meta.requestStatus === "fulfilled") {
        closeModal();
      }
    },
  });
  return (
    <Container className="w-1/2 md:w-10/12 relative">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-8 w-full"
      >
        <Title>Create new task</Title>
        <div className="flex flex-col gap-4">
          <InputText
            id="title"
            name="title"
            label="title"
            placeholder="Enter task's title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
            error={formik.errors.title}
          />

          <InputMultiline
            id="description"
            name="description"
            label="description"
            placeholder="Enter task's description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            error={formik.errors.description}
          />
        </div>
        <Button className="font-medium" fullwidth type="submit">
          Save
        </Button>
      </form>
      {loading && <LoadingOverlay />}
    </Container>
  );
}
