import { z } from 'zod'
 
export const SignupFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Имя должно быть длиной не менее 2 символов.' })
    .trim(),
  email: z.string().email({ message: 'Введите, пожалуйста, действительный адрес электронной почты.' }).trim(),
  password: z
    .string()
    .min(5, { message: 'Длина не менее 8 символов.' })
    .regex(/[a-zA-Z]/, { message: 'Содержит хотя бы одну букву.' })
    .trim(),
})
 
export type FormState =
  | {
      errors?: {
        name?: string[]
        email?: string[]
        password?: string[]
      }
      message?: string
    }
  | undefined