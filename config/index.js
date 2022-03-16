var configValues = require("./config");

module.exports ={
    getDBConnectionString: function(){
        return `mongodb+srv://${configValues.username}:${configValues.password}@sandbox.9kqgx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
    }
}