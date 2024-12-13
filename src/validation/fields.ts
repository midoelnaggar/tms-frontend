import * as yup from "yup";

export const name = yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must not exceed 50 characters')
    .required('Name is required');


export const email = yup.string()
    .email('Invalid email format')
    .required('Email is required');

export const password = yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(/[!@#\$%\^&\*]/, 'Password must contain at least one special character')
    .required('Password is required');

