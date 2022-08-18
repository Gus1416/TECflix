import PlaylistModel from "../models/PlaylistModel.js"
import VideoModel from "../models/VideoModel.js"

export const getAllVideos = async (req, res) => {
    try {
        const videos = await VideoModel.findAll()
        res.json(videos)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const getVideo = async (req, res) => {
    try {
        const video = await VideoModel.findAll({
            where: { videoID: req.params.id }
        })
        res.json(video[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const storeVideo = async (req, res) => {
    try {
        await VideoModel.create(req.body)
        res.json({
            "message" : "Video guardado correctamente"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const getPlaylistVideos = async (req, res) => {
    try {
        const videos = await VideoModel.sequelize.query(`SELECT * FROM videos 
        INNER JOIN playlistvideos ON videos.videoID = playlistvideos.videoID
        INNER JOIN playlists ON playlistvideos.playlistID = playlists.playlistID
        WHERE playlists.playlistName = '${req.params.id}'`)
        res.json(videos[0]) 
    } catch (error) {
        res.json({ message: error.message })
    }
}