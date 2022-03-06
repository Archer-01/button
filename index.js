const	express = require("express");
const	cookieParser = require("cookie-parser");
const	path = require("path");
const	fs = require("fs");
const	bodyParser = require("body-parser");

const	app = express();
const	PORT = process.env.PORT || 8080;

// body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/client", express.static("./client"));
app.use(cookieParser());

app.get("/", function(req, res) {
	if (req.cookies["userClicked"] === undefined) {
		res.cookie("userClicked", false);
	}
	res.sendFile('index.html', { root: "./client" });
})

app.get("/num", function(req, res) {
	let	number;

	number = fs.readFileSync("numfile", {
		encoding: "utf8",
		flag: "r",
	});
	res.send(number);
	res.end();
})

app.post("/savenum", function(req, res) {
	console.log(req.body.num);
	fs.writeFileSync("numfile", req.body.num.toString());
})

app.listen(PORT, function () {
	console.log(`Listening on http://localhost:${PORT}`);
});