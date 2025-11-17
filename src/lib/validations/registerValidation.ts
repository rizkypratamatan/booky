import {z} from "zod";


export const registerValidation = z.object({
    email: z.email({message: 'Email is not valid'}),
    name: z.string().min(3, {message: 'Name must be at least 3 characters'}),
    password: z.string().min(6, {message: 'Password must be at least 6 characters'}),
    passwordConfirm: z.string().min(6, {message: 'Password must be at least 6 characters'}),
    phone: z.string().min(11, {message: 'Phone must be at least 11 numbers'})
}).refine((data) => data.password === data.passwordConfirm, {
    message: 'Password must be match',
    path: ['passwordConfirm']
});
