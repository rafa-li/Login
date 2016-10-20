var mysql=require('mysql');
var dbconfig = ('./config');
 function connectServer(){

     var client=mysql.createConnection(dbconfig.db)

     return client;
 }


 function  selectFun(client,username,callback){
     //client为一个mysql连接对象
     client.query('select password from user_info where name="'+username+'"',function(err,results,fields){
         if(err) throw err;

         callback(results);
     });
 }

 function insertFun(client , username , password,callback){
     client.query('insert into user_info value(?,?)', [username, password], function(err,result){
         if( err ){
             console.log( "error:" + err.message);
             return err;
         }
           callback(err);
     });
 }

 exports.connect = connectServer;
 exports.selectFun  = selectFun;
 exports.insertFun = insertFun;
