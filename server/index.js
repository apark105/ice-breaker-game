const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db")

//middleware 
app.use(cors());
app.use(express.json());


//ROUTES//



//get all data 

app.get("/listOfQuestions", async (req, res) => {
    try {
        const allQuestions = await pool.query("SELECT * FROM DATE_GAME") 
        res.json(allQuestions.rows)
    } catch (err) {
        console.error(err.message)

    }
})


app.listen(5000, ()=>{
    console.log('Server has started on port 5000')
})