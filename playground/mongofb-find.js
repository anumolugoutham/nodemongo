//const MongoClient=require('mongodb').MongoClient;//both are similar
const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>
{
  if(err){
    return console.log('unable to connect');
  }
  console.log('Connected');
  const db=client.db('TodoApp');

  db.collection('Todos').find({
    //_id:new ObjectID('5c6111abf57e379dd5df7938')
    text:'goutham is the best'
  }).toArray().then((docs)=>{
  console.log(docs);
},(err)=>
{
  console.log('unable to connect',err);
});

db.collection('Todos').find().count().then((docs)=>{
console.log('Todos count:',docs);
},(err)=>
{
console.log('unable to connect',err);
});



//  client.close();
});
