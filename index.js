// include express and use functionality
const express = require('express');
const path = require('path');
const app = express(); //this is our express function store in app to trriger function
const port = 8000; // website run on port 8000

// get mongobd
const db = require('./config/mongoose');
// schema
const todo = require('./models/todolist');
// middleware
app.use(express.urlencoded());
// here accessing static folder like css file etc
app.use(express.static('asset'));
// set ejs as templating engine
app.set('view engine','ejs');
app.set('views','./views');
// sending data to database
app.post('/creat',function(req,res){
    todo.create(req.body,function(err,data){
        if(err){
            console.log('error in creating db',err);
            return;
        }
        console.log(data);
        return res.redirect('back');
    })
});
// printing the todoapp on browser
app.get('/',(req,res)=>{
    todo.find({},function(err,data){
        if(err){
            console.log('error in fetching data from db:',err);
            return;
        }
         // the render method take the name of the html
    // page to be rendered as input
    // this page should be in views folder
    // in the root directory
   return res.render('home',{title:'ToDoApp',task:data});
    })
   
});

// to delete the data
//delete button todo list

app.get('/delete',function(req,res){

    // console.log(req.body);
    console.log(req.query);
    var length=Object.keys(req.query).length;
    // console.log(Object.keys(req.query)[2]);
    for(let i=2;i<length;i++){
        todo.findByIdAndDelete(Object.keys(req.query)[i],function(err){
            if(err){
                console.log("error in deleting the data from db",err);
                return;
            }
            
        });
    }
    return  res.redirect('back');
});


// use express router
// app.use('/',require('./routes/index'));

//  server start running
app.listen(port, function(err){
    if(err){
     console.log (`Error in running server:${err}`);
     
    }
    console.log(`Server running on port:${port}`);
});