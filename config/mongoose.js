// require the library
// store data to database using cloudmongo db
const mongoose =  require('mongoose');
// connect to database
mongoose.connect('mongodb+srv://TodoApp:yCRCgQOf5tTOnfit@cluster0.xw3knqs.mongodb.net/?retryWrites=true&w=majority');
//define database acquire the connection (to check if it is successful)
const db = mongoose.connection;



//error if the error find when connecting to db then this message is shown 
db.on("error", function(){
    console.log("error in connecting to database");
    return;
})
//up and running then print the message 
db.once("open", function(){
    console.log("connected to database");
})