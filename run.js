const fs = require("fs");
fs.readFile("./data/sinh.json", "utf8", (err, json) => {
    if (err) {
        console.log("File read failed:", err);
        return;
    }
    console.log(json.split('Câu'))
});