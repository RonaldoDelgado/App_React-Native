import server from "./src/app.js";
import { PORT } from "./config.js";
import { connectDB } from "./src/db.js";
connectDB();
server.listen(PORT);
console.log("Server iniciado en el puerto " + PORT);
