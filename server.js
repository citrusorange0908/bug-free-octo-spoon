const express = require("express")
const bodyParser = require("body-parser")
const app = express()

const itemRoutes = require("./routes/items")

app.set("view engine", "ejs")

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/", itemRoutes)

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000")
})
