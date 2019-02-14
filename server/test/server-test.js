var expect=require('expect');
var request=require('supertest');

var {ObjectID}=require('mongodb');
var {app}=require('./../server');
var {Todos}=require('./../models/Todos');

const todo=[{
  text:'sindhu',
  _id: new ObjectID()
},{
  text:'kalyani',
  _id: new ObjectID()
}];
beforeEach((done)=>{
  Todos.remove({}).then(()=>{
  return Todos.insertMany(todo);
}).then(()=> done());
});
describe("POST /todos",()=>
{
  it('should do todo',(done)=>{
var text="hi beauty";
request(app)
.post('/todos')
.send({text})
.expect(200)
.expect((res)=>{
  expect(res.body.text).toBe(text);
})
.end((err,res)=>
{
  if(err)
  {
    return done(err);
  }
  Todos.find({text}).then((todos)=>{
    expect(todos.length).toBe(1);
    done();
  }).catch((err)=>{
    return done(e);
  });
});
});
});



describe('Get /Todos',()=>{

  it('should return todos',(done)=>{
request(app)
.get('/Todos')
.expect(200)
.expect((res)=>{
  expect(res.body.todos.length).toBe(2);
})
.end(done);

});
});

describe('Get /Todos/:id',()=>{
  it('should return id matching doc',(done)=>{
    request(app)
    .get(`/Todos/${todo[0]._id.toHexString()}`)
    .expect(200)
    .expect((res)=>{
      expect(res.body.text).toBe(todo[0].text);
    })
    .end(done);
  });
});
