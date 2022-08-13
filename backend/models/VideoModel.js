import db from "../database/db.js";
import { STRING } from 'sequelize'

const VideoModel = db.define('videos', {
    videoID: { type: STRING, primaryKey: true},
    videoName: { type: STRING },
    author: { type: STRING },
    length: { type: STRING },
    link: { type: STRING },
})

export default VideoModel