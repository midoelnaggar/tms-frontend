import { toast } from "react-toastify";

export default function showError(err: any) {
    toast.error(err.response.data.message || "Server error")
}
