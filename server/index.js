import cors from "cors"
import express, { request } from "express"

import { download } from "./download.js"

const app = express()
app.use(cors())

app.get("/summary/:id", (request, response) => {
  download(request.params.id)
  response.json({ result: "Download realizado com sucesso!" })
})

app.listen(3333, () => console.log("Server is running onm port 3333"))
