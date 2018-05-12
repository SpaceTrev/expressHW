const friends = require('../data/friends.js');
function bestMatch(req, res) {

  }
module.exports = function (app) {

    app.get("/api/friends", (request, response) => {
        response.json(friends);
    });
    app.post("/api/friends", (req, res) => {
      let bestMatch = {
        name: "",
        photo: "",
        friendDiff: 1000
      };
      let userData = req.body;
      console.log(req);
      let userName = userData.name;
      let userPhoto = userData.photo;
      let userScores = userData.scores;
      let totDiff = 0
      for (let t = 0; t < friends.length; t++) {
        totDiff = 0;
        for (let b = 0; b < friends[t].scores[b]; b++) {
          totDiff += Math.abs(parseInt(userScores[b]) - parseInt(friends[t].scores[b]));
          if (totDiff <= bestMatch.friendDiff) {
            bestMatch.name = friends[t].name;
            bestMatch.photo = friends[t].photo;
            bestMatch.friendDiff = totDiff;
          }
        }
      }
          friends.push(userData);
        res.json(bestMatch);
    });


}
