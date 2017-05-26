module.exports = (app)=>{
	app.get("/",(req,res)=>{
		res.render("index.ejs");
	});
	
	app.post("/name",(req,res)=>{
		res.json(req.body);
	});
}