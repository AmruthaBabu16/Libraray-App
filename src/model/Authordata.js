// accessing mongoose package
const mongoose=require('mongoose');
// database coonection
mongoose.connect('mongodb://localhost:27017/library',{useNewUrlParser:true});
// schema definition
const Schema=mongoose.Schema;
const AuthorSchema=new Schema({
    author:String,
    image:String
});
// model creation
var Authordata=mongoose.model('authordata',AuthorSchema);
module.exports=Authordata;