import express from "express";
import util from "./util";
import { routes } from "../routes";

const app = express()
const port  = util.config.default.PORT;

app.use('/', routes)

app.listen(port,() =>{
    console.log( `\nServer run  ning on ---> http://localhost:${port}\n`)
});

export default app;