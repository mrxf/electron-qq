var redis = require("redis"),
client = redis.createClient(6379, '127.0.0.1', {});
 
// 密码
// client.auth('');
 
// 选择数据库，比如第3个数据库，默认是第0个
client.select(3, function() { /* … */ });

client.on("ready", function (err) {
    if (err) return err;
    console.log("连接成功");
})

client.on("error", function (err) {
    console.log("Error " + err);
});
 
// 设置键值
// client.set("zName", "zhang", redis.print);
// 取值
//client.get("Testing", function (err, replies) {
//    console.log(replies);
//});
 
client.on("connect", function () {
    client.hmset("short", { 'script': 'javascript', 'back-end': 'node&java', 'font-end': 'electron' }, redis.print);
})
