const express =require("express");
const addbookRouter=express.Router();
const Bookdata=require('../model/Bookdata');
function router(nav){

    addbookRouter.get('/',function(req,res){
        res.render("addbook",{
            nav,
            title:'Library'
        });
    });
   
    addbookRouter.post('/add',function(req,res){
           var item={
        title:req.body.title,
        author:req.body.author,
        genre:req.body.genre,
        image:req.body.image
        

        }
       var book= Bookdata(item);
       book.save();//saving to databaseee
       res.render(res.render('bookadded',{
        nav,
        title:'Library'
    }))
       
    })
    
   
    return addbookRouter;
}

module.exports=router;