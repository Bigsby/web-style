var sass = require('node-sass');
var fs = require("fs");
const ouputFile = "./styles/style.css";

if (fs.existsSync(ouputFile)) {
    fs.unlinkSync(ouputFile);
}

sass.render({
    //outputStyle: "compact",
    file: "./styles/structure.scss",
    outFile: ouputFile
}, function (err, result) {
    if (err) {
        console.log(JSON.stringify(err));
    } else {
        fs.writeFile(ouputFile, result.css, () => console.log("OK!"));
    }
});