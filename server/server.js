var express=require('express');
var bodyParser=require('body-parser');

var {ObjectID}=require('mongodb');
var {mongoose}=require('./db/mongoose');
var {Todos}=require('./models/Todos');
var {User}=require('./models/User');

var app=express();
app.use(bodyParser.json());
app.post('/todos',(req,res)=>
{
  var Todo=new Todos({
    text: req.body.text
  });
  Todo.save().then((docs)=>{
  res.send(docs);
},(e)=>{
  res.send(e);
});
});

app.get('/todos',(req,res)=>{
  Todos.find().then((todos)=>{
    res.send({todos});
  },(err)=>{
    res.send(e);
  });
});

app.get('/todos/:id',(req,res)=>{
  var id=req.params.id;//params return /id value typed by user
  if(!ObjectID.isValid(id)){
  return res.status(404).send("invalid objectid");
};
Todos.findById(id).then((success)=>{
  if(!success){
    return res.status(404).send();
  };
  res.send(success);
},(err)=>{
  res.send("no data found")
});

});

app.listen(3000,()=>
{
  console.log("sern=ver is up");
});
module.exports={app};
