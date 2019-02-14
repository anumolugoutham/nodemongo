var mongoose=require('mongoose');
var User=mongoose.model('User',{
  text:{
    type:String,
    minlength:1,
    trim:true,
    required:true
  }
});
module.exports={User};
