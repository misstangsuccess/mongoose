const express=require("express");
const app=express();
app.get('/',(req,res)=>{
  res.send({
    name:"ben",
    age:22
  })
})
app.get('/user',(req,res)=>{
  res.send("当前在user目录")
})
 app.set("/login",(req,res)=>{
   res.send("当前在login目录 ")
 })
 app.listen(3003,(err)=>{
   if(err){
     console.log(err);
     return;
   }
   console.log('服务器启动成功 http://localhost:3003')
 })