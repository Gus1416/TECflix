import VideoModel from '../models/VideoModel.js'

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
            where: { idVideo: req.params.idVideo }
        })
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