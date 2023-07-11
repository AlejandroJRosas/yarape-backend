import { z } from 'zod'

const answersSchema = z.object({
  categoryId: z.number().min(1, 'El id de categoria debe der mínimo 1'),
  questionId: z.number().min(1, 'El id de pregunta debe der mínimo 1'),
  optionId: z.number().min(1, 'El id de opción debe der mínimo 1')
})

export const usersSchema = z
  .object({
    name: z.string(),
    isUcabMember: z.boolean(),
    footprint: z.number(),
    campusId: z
      .number()
      .min(1, 'El id de campus debe ser mínimo 1')
      .max(2, 'El id de campus debe ser máximo 2')
      .optional(), // hacer opcional el campusId
    role: z
      .enum(['E', 'T'])
      .optional(), // hacer opcional el role
    careerId: z
      .number()
      .min(1, 'El id de carrera debe ser mínimo 1')
      .optional(), // hacer opcional el careerId
    items: z
      .array(answersSchema)
      .min(1, 'Es necesario tener al menos una respuesta')
  })
  .refine((data) => {
    if (data.isUcabMember) {
      // el campusId y el role son requeridos si isUcabMember es verdadero
      return data.campusId !== undefined && data.role !== undefined
    } else {
      // el campusId y el role son opcionales si isUcabMember es falso
      return true
    }
  })
  .refine((data) => {
    if (data.role === 'E') {
      // el careerId es requerido si el role es E
      return data.careerId !== undefined
    } else {
      // el careerId es opcional si el role es T
      return true
    }
  })

export type UserDataCreate = z.infer<typeof usersSchema>
