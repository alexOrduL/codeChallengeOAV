
import Router  from "express";
import fs from "fs"
import path from "path";

let dbPath = path.join(__dirname,'../database/inventory.json');
export const routes = Router()

routes.get('/', (_req,res) => {
    const data = fs.readFileSync(dbPath, "utf-8")
    res.status(200).json(JSON.parse(data))
});
