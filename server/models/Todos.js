var mongoose=require('mongoose');
var Todos=mongoose.model('Todos',{
  text:{
    type:String,
    minlength:1,
    trim:true,
    required:true

  },
  completed:{
    type:Boolean,
    default:false
  },
  completedAt:{
    type:Number,
    default:null
  }
});
module.exports={Todos};
