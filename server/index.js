const	express = require("express");
const	app = express();
const	PORT = 8080;

app.use(express.static("../client"))

app.get("/", function(req, res) {
	res.end("Welcome to my page")
})

app.listen(PORT, function () {
	console.log(`Listening on http://localhost:${PORT}`);
});