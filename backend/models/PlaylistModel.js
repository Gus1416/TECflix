import db from "../database/db.js";
import { STRING, NUMBER } from "sequelize"

const PlaylistModel = db.define('playlists', {
    playlistID: { type: NUMBER, primaryKey: true },
    playlistName: { type: STRING }
})



export default PlaylistModel