import { z } from 'zod'

export const categorySchema = z.object({
  description: z
    .string()
    .nonempty('Es necesario indicar un nombre para la categoria')
    .max(64, 'El nombre debe ser menor a 64 carácteres')
})
