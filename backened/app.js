const mongoose = require('mongoose');
const express = require('express');  //it allow express
const app = express();  // it connect express and acquire all the properties of express.

const User = require('./models/userSchema'); //this is basicaly a file by which we define how our data goes to db and structured
//now to connect mongodb to our backened
const DB = 'mongodb+srv://akash:Akash123@cluster0.ayx73oy.mongodb.net/mernstack?retryWrites=true&w=majority';  //remember in b/w / and ? put database name
mongoose.connect(DB).then(()=>{
    console.log(`connection successfully`); //ifconnection success
}).catch((err)=>console.log(`no connection`)); //ifconnection not success  //now this three line 7,8,9 is nit necessary as i make a folder db and inside conn.js to store

//it convert the json data into object show us in terminal
app.use(express.json());

//we link the router file to make our route easy
app.use(require('./router/auth'));

//Middleware it generally use for authentication that a person is actually a user or not
const middleware = (req,res,next)=>{
    console.log('hello my middleware');
    next();

}

app.get('/',(req,res) =>{   //configure route
    res.send(`Hello world from server`);  //send response to user by the help of app.listen

    // app.get('/about',(req,res)=>{
    //     res.send(`hello from about page`);
    // })
    app.get('/contact',middleware,(req,res)=>{    // i use middleware for contact page for first authenticate then go to contact page
        console.log(`hello my contact page`);
        res.send(`hello from contact page`);
    })
});
console.log('hello Server');  //it print message to terminal

app.listen(3000, ()=>{
    console.log('server is running at port no 3000');
})