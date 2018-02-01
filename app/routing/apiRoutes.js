var friends = require("../data/friends.js");

module.exports = function (app) {

    //sends survey answers to friendsArray
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var user_info = req.body;
        var match;
        var score = 0;
        var user_scores = user_info.scores.reduce(function (result, val) {
            return result += Number(val);
        }, 0);

        friends.forEach(function (friend) {
            var friend_scores = friend.scores.reduce(function (result, val) {
                return result += Number(val);
            }, 0);
            var diff = Math.abs(friend_scores - user_scores);

            if (score <= diff) {
                match = friend;

                score = diff;
            }
        });
        app.post(friends);
        res.json(match);
    });
};
