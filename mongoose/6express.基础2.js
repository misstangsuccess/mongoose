const express = require("express");
const {
    resolve
} = require("path");

const app = express();
app.get("/pass/:id", (req, res) => {
    console.log(req.params)
    //res.end("我是end响应");//并没有设置响应content-type类型
    //res.send("我是send响应")//自动设置响应content-type
    //自动设置响应的content-type
    //  res.json({
    //     name: "tom",
    //     age: "20"
    // })  //影响一个json

     res.download("../package.json")//响应一个下载文件
    //res.sendFile(resolve(__dirname, "../package.json"))

    //res.redirect("http://www.jd.com");//返回重定向
     //res.set("hello", "world");//设置相应头

    //res.status(404);//设置相应状态码
   //res.send("hello")
})
app.get("/:id", (req, res) => {
    console.log(req.params)
})
app.get("/", (req, res) => {
    //req.query返回查询字符串的对象格式
    console.log(req.query)
    console.log(req.params)
    //请求头对象
    console.log(req.headers)
    // res.send()响应：帮我们书写好了响应头的content-type
    res.send({
        name: "lily",
        age: 18
    })
})
app.get("/user", (req, res) => {
    res.send("当前在user目录")
})
app.get("/login", (req, res) => {
    res.send("当前在login目录")
})
//启动服务
app.listen(3001, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("服务器启动成功 http://localhost:3001")
})