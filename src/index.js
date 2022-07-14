import app from "./app.js"
import "./database"
import {PORT} from "./config"


app.listen(PORT);
console.log("Servidor en el puerto:", PORT);
