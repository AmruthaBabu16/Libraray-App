const express =require("express");
const addauthorRouter=express.Router();
const Authordata=require('../model/Authordata');
function router(nav){

    addauthorRouter.get('/',function(req,res){
        res.render("addauthor",{
            nav,
            title:'New Author'
        });
    });
   
    addauthorRouter.post('/add',function(req,res){
           var item={
        
        author:req.body.author,
        image:req.body.image
        
        
        }
   
       var author= Authordata(item);
       author.save();//saving to database
       res.render('bookadded',{
        nav,
        title:'Library'
    })

    })
    
    return addauthorRouter;
}

module.exports=router;