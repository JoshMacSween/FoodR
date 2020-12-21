const mongoose = require('mongoose'); // Erase if already required

const restaurantSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
});

module.exports = mongoose.model('Restaurant', restaurantSchema);