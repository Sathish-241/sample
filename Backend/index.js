const express = require('express');
const path=require('path');
const{open}=require('sqlite')
const sqlite3=require('sqlite3');
const cors=require('cors');


const app = express();
app.use(cors())
app.use(express.json())

const dbpath=path.join(__dirname, 'user.db')

let db=null;

const initializeDBAndServer=async()=>{
    try{
        db=await open({
            filename:dbpath,
            driver:sqlite3.Database
        });
        app.listen(8001,()=>{
            console.log("Server is Running at http://localhost:8001/")
        });
    }
    catch(e){
        console.log("DB Error: ${e.message}");
        process.exit(1)
    }
};

initializeDBAndServer()

// getting user details query

app.post('/user/', async(request,response)=>{
    const userDeatils=request.body;
    const {userName, age, designation}=userDeatils;
    const addUserQuery=`INSERT INTO user(name,age,designation) VALUES('${userName}', '${age}', '${designation}' );`;
    const dbResponse=await db.run(addUserQuery);
    response.send("user details updated..")
})

// get details 

app.get('/user/', async(request,response)=>{
    const getUserDetailsQuery=`SELECT * FROM user`;
    const userDetails=await db.all(getUserDetailsQuery);
    response.send(userDetails)
})

