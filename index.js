// 引入模块
var express = require('express');

// 实例化express对象
var app = express();

// 监听端口号
var server = app.listen(4000, () => console.log('服务器正在4000端口号运行...'));


// 让服务器识别静态文件
app.use(express.static('public'));