var friends = require("../data/friends.js");

module.exports = function(app){
    app.get("/api/friends",function(req,res){
        res.json(friends);
    })

    var bestMatch = {
        name:"",
        photo:"",
        friendDifference: 1000
    };

    console.log(req,body);
}