const express = require("express");
const app = express();
const bp = require("body-parser");
const path = require("path");
const port = 8000;

app.use(bp.urlencoded());
app.use(express.static(path.join(__dirname+"/client")));
app.set("views",path.join(__dirname+"/client"));
app.set("view-engine","ejs");

require("./server/routes.js")(app);

const server = app.listen(port, ()=>{
	console.log("Server Running");
});