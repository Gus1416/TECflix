import db from "../database/db.js";

import { STRING } from 'sequelize'

const VideoModel = db.define('video', {
    idVideo: { type: STRING },
    emisor: { type: STRING },
    enlace: { type: STRING },
    duracion: { type: STRING },
    nombre: { type: STRING },
})

export default VideoModel