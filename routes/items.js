const express = require("express")
const router = express.Router()
const db = require("../db/db")

router.get("/", (req, res) => {

    db.all("SELECT * FROM items", (err, rows) => {
        res.render("index", { items: rows })
    })

})

router.post("/add", (req, res) => {

    const { name, description } = req.body

    db.run(
        "INSERT INTO items(name, description) VALUES (?, ?)",
        [name, description]
    )

    res.redirect("/")
})

module.exports = router
