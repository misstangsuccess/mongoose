//use atguitu
db
//查找年龄是18岁的
db.students.find({age:18})
//只查询年龄是18岁的人的姓名
db.students.find({age:18},{name:1})
//只查询年龄是18岁的人数据,只要年龄和姓名
db.students.find({age:18},{name:1,age:1})
//findOne方法查找符合条件的第一个数据
db.students.findOne({age:18},{name:1})
db.students.findOne({age:20})
//将姓名是张三的人的年龄改变为28
db.students.updateOne({name:"张三"},{$set:{age:28}})
//给所有的男添加一个字段
db.students.updateMany({sex:"男"},{$set:{hair:"less"}})
db.students.updateMany({sex:"女"},{$set:{hair:"more"}})
//所有人的年龄都长了1岁
db.students.updateMany({},{$inc:{age:1}})
//删除年龄是21岁的第一个人
db.students.deleteOne({age:21})
//db.students.find({$inc:{age:{$lt:18}},{sex:"女"}})