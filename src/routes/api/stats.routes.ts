import { Router } from 'express'
import { getSurveyedQuantity } from '../../controllers/stats/getSurveyedQuantity'
import { getAvgUcabVsNonUcab } from '../../controllers/stats/getAvgUcabVsNonUcab'
import { getAvgCampusVs } from '../../controllers/stats/getAvgCampusVs'
import { getAvgStdVsWrk } from '../../controllers/stats/getAvgStdVsWrk'
import { getMostPickedOptions } from '../../controllers/stats/getMostPickedOptions'

const router = Router()

/* eslint-disable @typescript-eslint/no-misused-promises */
router.get('/surveyed-quantity', getSurveyedQuantity)
router.get('/ucab-vs-non-ucab', getAvgUcabVsNonUcab)
router.get('/avg-campus-vs', getAvgCampusVs)
router.get('/avg-std-vs-wrk', getAvgStdVsWrk)
router.get('/most-picked-options', getMostPickedOptions)

export default router
