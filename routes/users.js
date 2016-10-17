var express = require('express');
var router = express.Router();

// //导入MySQL模块
// var mysql = require('mysql');
// var dbConfig = require('../node_modules/dao/config');
// // var userSQL = require('../db/Usersql');
//
// //使用DBconfig.js的配置信息创建一个MySQL连接池
// var pool = mysql.createPool(dbConfig.mysql);
//
// //响应一个json数据
// var responseJSON = function (res,ret) {
//   if (typeof ret === 'undefined') {
//     res.json({
//       code: '-200',
//       msg : '操作失败'
//     })
//   }else{
//     res.json(ret);
//   }
// };
//
// //添加用户
// router.get('/addUser',function (req,res,next) {
//   //从连接池获取连接
//   pool.getConnection(function (err,connection) {
//     //从前台页面传过来的参数
//     var param = req.query || req.params;
//     //建立连接 增加一个用户信息
//     connection.query(userSQL.insert,[param.uid,param.name],function (err,result) {
//       if (result) {
//         result = {
//           code: '200',
//           msg : '增加成功'
//         };
//       }
//       //以json形式，把操作结果放回给前台界面
//       responseJSON(res,result);
//       //释放连接
//       connection.release();
//     });
//   });
// });

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
