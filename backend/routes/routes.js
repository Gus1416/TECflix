import express from 'express'
import { getAllVideos, getVideo, storeVideo } from '../controllers/VideoController.js'

const router = express.Router()

router.get('/', getAllVideos)
router.get('/:idVideo', getVideo)
router.post('/', storeVideo)

export default router