import db from "../database/db";

import { STRING, NUMBER } from "sequelize";

const VideoListModel = db.define('videolista', {
    idVideo: { type: STRING },
    idPlaylist: { type: NUMBER }
})

export default VideoListModel