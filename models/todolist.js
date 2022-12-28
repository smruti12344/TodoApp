// create schema for database
const mongoose=require('mongoose');
const TodoAppSchema=new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }
});
const todo=mongoose.model('todo',TodoAppSchema);
module.exports=todo;