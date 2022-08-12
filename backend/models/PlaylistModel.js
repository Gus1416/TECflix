import db from "../database/db";

import { STRING, NUMBER } from "sequelize";

const PlaylistModel = db.define('listareproduccion', {
    id: { type: NUMBER },
    nombre: { type: STRING }
})

export default PlaylistModel