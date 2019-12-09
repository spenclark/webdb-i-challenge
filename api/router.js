const express = require("express")
const db = require('../data/dbConfig')

const router = express.Router()

router.get('/', (req, res) => {
    db("accounts")
        .then( data => {
            res.status(200).json(data)
        })
        .catch(error =>{
            res.status(500).json({ error: "Failed GET /"})
        })
})
module.exports = router