// // import const nazwa = require ('nzawa ścieski ')
// // const functions = require('./functions');
// // console.log("Hello World");

// // functions.sayHello();
// // functions.add(2,3);

// //
// const http = require('http');
// const handler = (request,response) => {
//     console.log('sample message');
//     response.end('HELLo World');
// }
// //create server
// const server = http.createServer(handler);
// // lokal portu
// const port = 3000;

// server.listen(port, () =>{
//     console.log(`serwer działa na porcie ${port}`);
// })

const express = require("express");
const path = require("path/posix");
const port = 3000;
const app = express();

const functions = require("./functions")
app.set("view engine","hbs")
const path = require("path")

app.use("/assets", express.static(path.join(_dirname,"./assets")));
app.use("/js",express.static(path.join(__dirname,"/js")));

app.get("/", function(reg,res) {
    res.render("index", {
        title: "Tytuł strony",
        subtitle:"podtytuł na alk",
        dodawanie: functions.add(1,2)
    });
})
app.get("/about", function(reg, res){
    res.render("about", {
        title: "Tytuł strony",
        subtitle:"podtytuł na alk",
        dodawanie: functions.add(1,2)
    });
})
app.get("/kontakt", function(reg,res){
    res.send("kontakt ze mna");
});
app.listen(port, (err) => {
    if (err) {
        return console.log(`Błąd ${err}`);
    }
    console.log(`Serwer działa prawidłowo na porcie ${port}`);
});