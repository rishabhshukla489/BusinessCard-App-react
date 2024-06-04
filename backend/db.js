const mongoose =require("mongoose");

mongoose.connect("mongodb+srv://root:toor@cluster0.xkbfrpi.mongodb.net/businesscardapp");

const schema= mongoose.Schema({
    name: String,
    description: String,
    interests: String,
    linkedin: String,
    twitter: String
})

const businesscard= mongoose.model('businesscard',schema);

module.exports={businesscard}