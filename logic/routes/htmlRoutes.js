const path = require("path");
module.exports = function(app){ 
    app.get("/survey",(req, res) => {
        res.sendFile(path.join(__dirname, "/../pub/survey.html"));
    });
    app.use((req, res) => {
		res.sendFile(path.join(__dirname + '/../pub/main.html'));
	});
}