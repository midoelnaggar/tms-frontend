interface User {
    id: string;
    name: string;
    email: string;
    token: string;
}

interface RegisterPayload {
    name: string;
    email: string;
    password: string;
}

interface LoginPayload {
    email: string;
    password: string;
}

interface Task {
    id: string;
    title: string;
    description: string | null;
    completed: boolean;
    created_at: Date;
    userId: string;
}

interface CreateTaskPayload {
    title: string;
    description?: string;
}

interface SuccessResponse {
    status: "success";
    message: string;
}

interface UpdateTaskPayload {
    id: string;
    isCompleted: boolean;
}

interface DeleteTaskPayload {
    id: string;
}

type SortType = "date" | "title" | "marked";

type StatusType = "all" | "marked" | "unmarked"