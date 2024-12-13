import { apiUrls, axiosInstance } from "."

const tasksServices = {
    createTask: (payload: CreateTaskPayload) => (axiosInstance.post<Task>(apiUrls.tasks.all, payload)),
    getTasks: () => (axiosInstance.get<Task[]>(apiUrls.tasks.all)),
    updateTaskCompliation: ({ id, ...payload }: UpdateTaskPayload) => (axiosInstance.put<SuccessResponse>(apiUrls.tasks.taskById(id), payload)),
    deleteTaskCompliation: ({ id }: DeleteTaskPayload) => (axiosInstance.delete<SuccessResponse>(apiUrls.tasks.taskById(id))),
}
export default tasksServices;