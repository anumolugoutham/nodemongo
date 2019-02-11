//const MongoClient=require('mongodb').MongoClient;//both are similar
const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>
{
  if(err){
    return console.log('unable to connect');
  }
  console.log('Connected');
  const db=client.db('TodoApp');
  db.collection('Todos').insertOne({
    text:'something to do',
    completed:false
  },(err,result)=>
{
  if(err)
  {
    return console.log('unable to connect',err);
  }
  console.log(JSON.stringify(result.ops,undefined,2));
});

db.collection('Users').insertOne({
  name:'Goutham',
  age:25,
  location:'narsingi'
},(err,result)=>
{
if(err)
{
  return console.log('unable to connect',err);
}
console.log(JSON.stringify(result.ops,undefined,2));
console.log(result.ops[0]._id.getTimestamp());
});




db.collection('Users').insertOne({
  name:'Goutham',
  age:25,
  location:'narsingi'
},(err,result)=>
{
if(err)
{
  return console.log('unable to connect',err);
}
console.log(JSON.stringify(result.ops,undefined,2));
});

  client.close();
});
