const express =require("express");
const bodyParser=require('body-parser');
const {check,vaidationResult, body}=require('express-validator')



const urlencodedParser=bodyParser.urlencoded({extended:false})
const app =new express();
const nav=[
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Authors'
    },
    {
        link:'/addbook',name:'Add Book'
    },
    {
        link:'/addauthor',name:'New Author'
    }
    ,
    {
        link:'/signin',name:'Sign In'
    },
    {
       link:'/signup',name:'Sign Up'
    }
    
];
const bookRouter=require('./src/routes/bookRoutes') (nav);
const authorRouter=require("./src/routes/authorRoutes")(nav);
const signinRouter=require("./src/routes/signinRoutes")(nav);
const signupRouter=require("./src/routes/signupRoutes")(nav);
const addbookRouter=require("./src/routes/addbookRoutes")(nav);
const addauthorRouter=require("./src/routes/addauthorRoutes")(nav);
app.use(express.urlencoded({extended:true}))
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',bookRouter);
app.use('/authors',authorRouter);
app.use('/addauthor',addauthorRouter);
app.use('/signin',signinRouter);
app.use('/addbook',addbookRouter);
app.use('/signup',signupRouter);

app.get("/",function(req,res){
    res.render("index",
    {    
        nav,
        title:'Library'
    });
});
// bookRouter.get('/single',function(res,req){
//     res.setEncoding("hai");
// })
// app.get("/authors",function(req,res){
//     res.render("index",
//     {    
//         nav,
//         title:'Library'
//     });
// });
app.listen(3002);