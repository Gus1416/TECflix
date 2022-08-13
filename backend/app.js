import express from 'express'
import cors from 'cors'
import db from './database/db.js'
import router from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/', router)

try {
    await db.authenticate()
    console.log("Conexión exitosa a la base de datos")
} catch (error) {
    console.log(`El error en la conexión es: ${error.message}`)
}

/* app.get('/', (req, res) => {
    res.send("HOLA MUNDO")
}) */

app.listen(8000, () => {
    console.log("Server UP running in http://localhost:8000/")
})