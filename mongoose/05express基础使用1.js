const express=require("express");
//创建application对象
const app=express();
//'/ad:id':接收当前规定路径的任意的请求
app.get("/",(req,res)=>{
  //res.send()响应,帮我们写好了响应头Content-Type
  res.send({
    name:"tom",
    age:20
  })
})
app.get("/user",(req,res)=>{
  res.send("当前在user目录")
})
app.get("/login",(req,res)=>{
  res.send("当前在login目录")
})
//启动服务
app.listen(3001,(err)=>{
  if(err){
    console.log(err);
    return;
  }
  console.log("服务器启动成功 http://localhost:3001")
})
