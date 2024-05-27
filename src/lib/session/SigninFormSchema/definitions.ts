import { z } from 'zod';

export const SigninFormSchema = z.object({
  email: z
    .string()
    .email({ message: 'Введите, пожалуйста, действительный адрес электронной почты.' })
    .trim(),
  password: z
    .string()
    .min(5, { message: 'Длина не менее 8 символов.' })
    .regex(/[a-zA-Z]/, { message: 'Содержит хотя бы одну букву.' })
    .trim(),
});


export type FormState =
  | {
      errors?: {
        email?: string[]
        password?: string[]
      }
      message?: string
    }
  | undefined
