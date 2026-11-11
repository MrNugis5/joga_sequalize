const express = require("express")
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true}))

const  Sequelize  = require("sequelize")
const sequelize = new Sequelize("mysql://root:qwerty@localhost:3306/joga_sequelize" )

sequelize
    .authenticate()
    .then(() => {
        console.log("connected")
    })
    .catch(err => {
        console.error("unable to connect", err)
    })

app.get("/", (req, res) => { 
    res.json({message: "welcome to sequalize"} )
} )

app.listen(3000, () => {
    console.log("server running http://localhost:3000")
} )