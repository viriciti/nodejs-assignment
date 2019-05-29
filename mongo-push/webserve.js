const express = require('express')
const app = express()
const searchQuery = require("./db").searchQuery

app.get('/vehicles', (req,res)=>{
    console.log("user connected to /vehicles")
    res.json(searchQuery(req.params))
})

app.listen(5000, () => console.log('Express API listening on port 5000'))
