import express from 'express'
import { getAllVideos, getPlaylistVideos, getVideo, storeVideo } from '../controllers/VideoController.js'
import { createPlaylist, getAllPlaylists, getPlaylist } from '../controllers/PlaylistController.js'

const router = express.Router()

/* Rutas a VideoController */
router.get('/videos/', getAllVideos)
router.get('/videos/:id', getVideo)
router.post('/videos/', storeVideo)
router.get('/playlist/:id', getPlaylistVideos)

/* Rutas a PlaylistController */
router.get('/playlists/', getAllPlaylists)
router.get('/playlists/:id', getPlaylist)
router.post('/playlists/', createPlaylist)



export default router