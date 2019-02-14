//const MongoClient=require('mongodb').MongoClient;//both are similar
const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>
{
  if(err){
    return console.log('unable to connect');
  }
  console.log('Connected');
  const db=client.db('TodoApp');

  db.collection('Todos').deleteMany({text:'eat lunch'}).then((result)=>{
  console.log(result);
} );
//deleteOne method finds the first element matching in the collection and deltes it
db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
console.log(result);
} );

//  client.close();
});
