import { apiUrls, axiosInstance } from "."

const userServices = {
    register: (payload: RegisterPayload) => (axiosInstance.post<User>(apiUrls.users.register, payload)),
    login: (payload: LoginPayload) => (axiosInstance.post<User>(apiUrls.users.login, payload)),
}
export default userServices;