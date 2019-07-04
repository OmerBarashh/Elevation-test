const express = require("express")
const request = require('request')
const path = require('path')
const app = express()
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))



app.get('/recipe/:ingredient' , function(req , res){
    const ingredient = req.params
    request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}}` , function(err , result){
        console.log(result)
    })
})

app.get('/sanity' , function(req , res){
    res.send('OK')
})


const port = 8080
app.listen(port , function(){
    console.log("running on port " + port)
})