import express from "express";
import util from "./util";

const app = express()

// Routes
app.get('/', (_req, res) => {
    res.status(200).json({message: "Success"});
})

const port  = util.config.default.PORT;

app.listen(port,() =>{
    console.log( `\nServer run  ning on ---> http://localhost:${port}\n`)
});

export default app;