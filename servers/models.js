const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');


mongoose.connect('mongodb://localhost/angular_api', { useNewUrlParser: true});
var LikeSchema = new mongoose.Schema({
  like: { 
      type: Number, 
      max: 1
  },
})

var PetSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true,
        unique: [true, 'Pet name must be unique'],
        minlength: [3, 'Must be atleast 3 Characters'],
        maxlength: 45
    },
    type: {
        type: String, 
        required: true,
        minlength: [3, 'Must be atleast 3 Characters'],
        maxlength: 45
    },
    description:{
        type: String, 
        required: true, 
        minlength: [3, 'Must be atleast 3 Characters'],
        maxlength: 255
    },
    skills: {
        skillone: {
            type: String,
            default: ''
            },
        skilltwo: {
            type: String,
            default: ''
            },
        skillthree: {
            type: String,
            default: ''
        }
    },
    likes: [LikeSchema]
}, {timestamps: true})

PetSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Pet', PetSchema);