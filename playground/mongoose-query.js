var {ObjectID}=require('mongodb');
var  {mongoose}=require('./../server/db/mongoose');
var  {Todos}=require('./../server/models/Todos');

var id='5c640e2e98388432243d252b';

if(!ObjectID.isValid(id)){
  console.log('not valid');
};
//Todos.find({
  //_id:id
//}).then((Todo)=>{
  //console.log(Todo)
//},(err)=>{
  //console.log("error");
//});
//Todos.findOne({
  //_id:id
//}).then((Todo)=>{
  //console.log(Todo)
//},(err)=>{
  //console.log("error");
//});

Todos.findById(id).then((Todo)=>{
  console.log(Todo);
},(err)=>{
  return console.log("Object not found");
}).catch((E)=>{
console.log(E);
});
