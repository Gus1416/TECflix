import db from "../database/db.js";
import { STRING } from 'sequelize'
import PlaylistModel from "./PlaylistModel.js";
import PlaylistVideos from "./PlaylistVideos.js";

const VideoModel = db.define('videos', {
    videoID: { type: STRING, primaryKey: true},
    videoName: { type: STRING },
    author: { type: STRING },
    length: { type: STRING },
    link: { type: STRING },
})

VideoModel.belongsToMany(PlaylistModel, { through: PlaylistVideos })

export default VideoModel