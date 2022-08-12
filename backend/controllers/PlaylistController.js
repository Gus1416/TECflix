import PlaylistModel from "../models/PlaylistModel.js";

export const getAllPlaylists = async (req, res) => {
    try {
        const playlists = await PlaylistModel.findAll()
        res.json(playlists)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const getPlaylist = async (req, res) => {
    try {
        const playlist = await PlaylistModel.findAll({
            where: { id: req.params.id }
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const createPlaylist = async (req, res) => {
    try {
        await PlaylistModel.create(req.body)
        res.json({
            "message" : "Lista de reproducción creada correctamente "
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}