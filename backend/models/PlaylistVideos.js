import { NUMBER, STRING } from "sequelize";
import db from "../database/db.js";
import PlaylistModel from "./PlaylistModel.js";
import VideoModel from "./VideoModel.js";

const PlaylistVideos = db.define('playlistvideos', {
    playlistID: { 
        type: NUMBER,
        references: {
            model: PlaylistModel,
            key: PlaylistModel.playlistID
        } 
    },
    videoID: {
        type: STRING,
        references: {
            model: VideoModel,
            key: VideoModel.videoID
        }
    }
})

export default PlaylistVideos