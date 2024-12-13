import * as yup from 'yup'
import { name, email, password } from "./fields"

export const registrationSchema = yup.object().shape({
    name,
    email,
    password
})

export const loginSchema = yup.object().shape({
    email,
    password
})

export const createTaskSchema = yup.object().shape({
    title: yup.string().required().min(2).max(50),
    description: yup.string().max(550).optional(),
})