//引入包
const mongoose=require("mongoose");
//连接数据包
mongoose.connect("mongodb://127.0.0.1:27017/atguigu",{

})
mongoose.connection.once("open",(err)=>{
  if(err){
    console.log(err);
    return;
  }
  console.log("成功")
})
//集合约束
const teacherSchema=new mongoose.Schema({
  name:{
    type:String,
    unique:true,
    required:true,
  },
  age:Number,
  sex:String,
  hobby:[String],
  createTime:{
    type:Date,
    default:Date.now
  }
})
//创建集合
const Teacher=mongoose.model("teacher",teacherSchema)
//(1)
// new Teacher({
//   name:"张乐",
//   age:18,
//   sex:"女",
//   hobby:['吹牛','打牌'],
// }).save((err)=>{
//   if(err){
//     console.log("初始化错误:"+err);
//     return;
//   }
//   console.log("初始化成功")
// })
//(2)
// Teacher.create({
//   name:"唐小呀",
//   age:27,
//   sex:"男",
//  hobby:['散步','画画'],
//  createTime:Date.now()
// },(err)=>{
//   if(err){
//     console.log("出错"+err);
//     return;
//   }
//   console.log("成功")
// })
//(3)
// const result=Teacher.find({
//   sex:"男"
// })
// result.then((value)=>{
//   console.log(value);
// }).catch((err)=>{
//   console.log(err)
// })
//(4)
// const result=Teacher.updateMany({
//   $inc:{age:1}
// })
// result.then((value)=>{
//    console.log(value);
// }).catch((err)=>{
//   console.log(err)
//   })
//(5)
const result=Teacher.deleteOne({
  name:"张乐"
})
result.then((value)=>{
     console.log(value);
  }).catch((err)=>{
    console.log(err)
    })