const { Schema, model } = require('mongoose');

const viasSchema = new Schema({
    id: {
        type: Number,
        required: true,
        trim: true,
        unique: true
    },
    tipo: {
        type: String,
        required: true
    },
    cllokr:
    {
        type: String,
        required: true
    },

    numero: Number,
    congestion:{
        type:Number,
        required:true
    }
}, {
    timestamps: true
})
module.exports= model('vias',viasSchema);