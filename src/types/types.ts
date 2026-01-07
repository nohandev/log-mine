import { z } from 'zod'

export interface NavItemsType {
  id: string | number
  label: string
  href:  string
  variant: 'link' | 'button'
}

export interface FooterItemsType {
    id: string
    img: string
    alt: string
    label: string
}

export const LoginSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email('Insira um endereço de e-mail válido')
    .min(5, 'O e-mail deve ter pelo menos 5 caracteres'),
  
  password: z
    .string()
    .min(8, 'A senha deve ter no mínimo 8 caracteres')
    .max(100, 'A senha é muito longa'),

  rememberPassword: z
    .boolean()
})

export type LoginSchemaValues = z.infer<typeof LoginSchema>