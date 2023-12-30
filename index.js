import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const result = await axios.post("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json");
        // const responseObject = JSON.parse(jsonString);
        console.log(result);
        // console.log(JSON.parse(result.data));
        res.render("index.ejs", {quote: result.data.quoteText, author: result.data.quoteAuthor})
    } catch (error){
        console.log(error.response.data);
        res.status(500);
    }
});

app.listen(port, (req, res) => {
    console.log("listening on port 3000");
});