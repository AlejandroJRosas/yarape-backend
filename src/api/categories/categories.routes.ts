import { Router } from 'express'
import { schemaGuard } from '../../middlewares/schemaGuard'
import { categorySchema } from './categories.schema'
import { getAllCategories } from './actions/getAll.action'
import { deleteCategory } from './actions/delete.action'

const router = Router()

/* eslint-disable @typescript-eslint/no-misused-promises */
router.get('/all', getAllCategories)
router.post('/', schemaGuard(categorySchema))
router.put('/:categoryId', schemaGuard(categorySchema))
router.delete('/:categoryId', deleteCategory)

export default router
