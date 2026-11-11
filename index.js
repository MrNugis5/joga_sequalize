const express = require("express")
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true}))

app.get("/", (req, res) => { 
    res.json({message: "welcome to sequalize"} )
} )

app.listen(300, () => {
    console.log("server running http://localhost:3000")
} )