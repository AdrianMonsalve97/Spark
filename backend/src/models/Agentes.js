const {Schema,model}=require('mongoose');

const agentesSchema =new Schema({
nombre:{
    type:String,
    required:true

},
codigo:{
    type:Number,
    required:true,
    unique:true
},
experiencia:{
    type:Number,
    required:true
},
codigot:{
    type:Number,
    required:true,
    unique:true
},
Viasa:{
Type:Number,


},
date:{
    type:Date,
    default:Date.now
}
},{
    timestamps:true
})

module.exports= model('agentes',agentesSchema);