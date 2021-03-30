const express =require("express");
const bookRouter=express.Router();
const Bookdata=require('../model/Bookdata')//acsecing bokdata frm databse
function router(nav){

    bookRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
        res.render("books",{
            nav,
            title:'Library',
            books})
        });
    });
    bookRouter.get('/:id',function(req,res){
        const id=req.params.id
        Bookdata.findOne({_id:id})
        .then(function(book){
        res.render('book',{
            nav,
            title:'Library',
            book})
    
        })
    })


bookRouter.get('/edit/:id',function(req,res)
    {   
        const id=req.params.id
        Bookdata.findOne({_id:id})
        .then(function(book){
        res.render('edit',{
            nav,
            title:'Library',
            book})
        })
    })
 bookRouter.post('/edit/:id',function(req,res)
    {  
       id=req.params.id;
       var item={
        title:req.body.title,
        author:req.body.author,
        genre:req.body.genre,
        image:req.body.image
        

        }
       
        Bookdata.findByIdAndUpdate({_id:id},{$set:item 
            })
        .then(function(){
            res.render('Updated',{
                nav,
                title:'Library'
            })
        })
               })
            
    bookRouter.get('/delete/:id',function(req,res) {
         id=req.params.id;
         Bookdata.findByIdAndDelete({_id:id})
         .then(()=>{
             res.render('delete',{
                 nav,
                 title:'Library'
             })
         })
    
        })
return bookRouter;
}


module.exports=router;
