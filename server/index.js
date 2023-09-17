import cors from "cors"
import express, { request } from "express"

const app = express()
app.use(cors())

app.get("/summary", (request, response) => {
  response.send("Hi!")
})

app.listen(3333, () => console.log("Server is running onm port 3333"))
