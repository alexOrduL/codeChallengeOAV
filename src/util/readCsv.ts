import fs from "fs";
import { parse } from "csv-parse";

const readCsv = fs.createReadStream(__dirname + '/inventory.csv').
pipe(parse({ delimiter: ",", from_line: 2 }))
.on("data", function (row) {
  // db.setItem(name, JSON.stringify(row))
})
.on("error", function (error) {
  console.log(error.message);
})
.on("end", function () {
  console.log("Hello");
});

export default readCsv