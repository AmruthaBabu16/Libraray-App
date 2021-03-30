const express =require("express");
const signupRouter=express.Router();   
function router(nav){ 
    signupRouter.get('/',function(req,res){
        res.render("signup",{
            nav,
            title:"Sign Up"
            
        });
    });
    signupRouter.post('/submit',function(req,res){
        //     var item={
        //     title:req.query.title,
        //     author:req.query.author,
        //     genre:req.query.genre,
        //     image:req.query.image
            
            
        //     }
        //    var book= Bookdata(item);
        //    book.save();//saving to databaseee
        //    res.redirect('/books');
               
          
           res.redirect('/signin');
        
        })
    
    return signupRouter;
}
module.exports=router;