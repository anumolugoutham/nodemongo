//const MongoClient=require('mongodb').MongoClient;//both are similar
const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>
{
  if(err){
    return console.log('unable to connect');
  }
  console.log('Connected');
  const db=client.db('TodoApp');

  db.collection('Users').findOneAndUpdate({
    _id:new ObjectID('5c5fbc69c5fce43958f4be66')
  },{
    $set:{
      location:'aswapuram'
    },
    $inc:{
      age:2
    }
  },{returnOriginal:false
  }).then((result)=>
{
  console.log(result);
});


//  client.close();
});
