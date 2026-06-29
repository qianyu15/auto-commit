const fs = require("fs");
while(true){
let value = parseInt(fs.readFileSync("counter.txt", "utf-8")) || 0;

value++;

fs.writeFileSync("counter.txt", String(value));
}
