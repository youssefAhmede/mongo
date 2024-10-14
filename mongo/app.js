const express = require('express');
const app = express();

const mongoose = require('mongoose');
const port = 3000;

mongoose.connect('mongodb://localhost:27017/newDB1');



const studentsSchema = new mongoose.Schema({
    name:String,
    id:Number,
    grade:Number
})

const student = mongoose.model('student',studentsSchema);
app.use(express.json());

app.post('/student',async(req,res)=>{
    const {name,id,grade} = res.body;
    const myStudent = new student(name,id,grade);
    const newStudent = await myStudent.save();


})


app.listen(port,()=> console.log("The Server Starts"))