module.exports = (app)=>{
	app.get("/",(req,res)=>{
		res.render("index.ejs");
	});
	
	app.post("/name",(req,res)=>{
		console.log(req.body);
		res.json(req.body);
	});
}