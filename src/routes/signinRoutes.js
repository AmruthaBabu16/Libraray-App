const express =require("express");
const bodyParser=require('body-parser')
const {check,validationResult }=require('express-validator');
const urlencodedParser=bodyParser.urlencoded({extended:false})
const signinRouter=express.Router();   
function router(nav){ 
    signinRouter.get('/',function(req,res){
        res.render("signin",{
            nav,
            title:"Sign In",
            login:'Login Here',
            pass:"Password",
            sub:'submit'
        });
    });
      signinRouter.post('/submit',function(req,res){
       
          
           res.redirect('/books');
        
        })
   
    signinRouter.post('/signin',urlencodedParser,[
        check('email','Email is not valid')
        .exists()
        .isLength({min:3})
        
    ],function(req,res){
        const errors=validateResult(req);
        if(!errors.isEmpty()){
            // return res.status(422).jsonp(errors.array())
            const alert=errors.array()
            res.render('signin',{
                alert
            })
        }
    })
    return signinRouter;
}
module.exports=router;