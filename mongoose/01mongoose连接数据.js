//引入mongoose包
//const mongoose=require("mongoose")
//连接MongoDB数据库
//connect第一参数:mogodb://域名:端口号/连接的数据库名称
// mongoose.connect("mongodb://127.0.0.1:27017/atguigu",{
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// //对mongoose对象的connection对象绑定事件,当数据库连接的时候会触发open事件
// mongoose.connection.once("open",(err)=>{
//   if(err){
//     console.log(err);
//     return;
//   }
//   console.log("mongodb连接成功");
// })

const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/atguigu",{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
mongoose.connection.once("open",(err)=>{
  if(err){
    console.log(err);
    return;
  }
  console.log("mongodb连接成功")
})
