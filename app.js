const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended : true}));

app.get("/" , function(req , res){
    res.sendFile(__dirname + "/index.html")
});

app.post("/" , function(req , res){

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1+num2;
    res.send("The result of your calculation is" + result);
})


app.get("/bmicalculator" , (req , res)=>{
    res.sendFile(__dirname + "/bmiCalculator.html")
});

app.post("/bmicalculator" , (req , res)=>{

    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var bmi = weight/(height*height);
    res.send("Your BMI is " + bmi);
});


app.listen(3000 , ()=>{
    console.log("This server has been started on port 3000.")
});