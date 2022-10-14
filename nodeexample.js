var express=require('express')
var app=express()

var cors = require('cors')
app.use(cors())

const bodyparser = require('body-parser')
app.use(bodyparser.json())

let corsOptions = {
    origin:'*'
};

const employe=[
    {
        
        empid:1010,
        ename:"john",
        department:"development"
    },
    {
        empid:1020,
        ename:"pravlika",
        department:"recruitment"
    },
    {
        empid:1030,
        ename:"divya",
        department:"human_resource"
    },
    {
        empid:1040,
        ename:"sruthi",
        department:"human_resource"
    },
    {
        empid:1050,
        ename:"bhavani",
        department:"devlopment"
    },
    {
        empid:1060,
        ename:"rupa",
        department:"sales"
    },
    {
        empid:1070,
        ename:"bindhu",
        department:"devlopment"
    },
    {
        empid:1080,
        ename:"pavan",
        department:"IT"
    },
    {
        empid:1090,
        ename:"pandu",
        department:"IT"
    },
    {
        empid:2000,
        ename:"jeeva",
        department:"managment"
    },
    
]

app.get('/employe',cors(corsOptions),(req,res)=>
{
    res.send(employe)
    console.log(employe)
})

app.listen(2345,()=>{
    console.log("server is running")

})