var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var wxpay = require('./util');
 
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
app.use(express.static('public'));
app.all('*',function (req,res,next) {
    res.header('Access-Control-Allow-Origin',"*");
    res.header('Access-Control-Allow-Headres',"X-Requested-With");
    res.header('Access-Control-Allow-Methods',"PUT,POST,,GET,DELETE,OPTIONS");
    res.header('X-Powered-By',"3.2.1");
    res.header("Content-Type","application/json;chareser=utf-8");
    next();
});
app.get('/pay', urlencodedParser, function (req, res) {
   var appid     = 'wxb4ee79e163906023';
   var appsecret = 'c9e9b9a3055c6f89988431fa4f61a96e';
   var mchid     = '1524213971'
   var mchkey    = 'chainpalchainpalchainpalchainpal';
  var bodyData = "<xml>";
  bodyData += "<appid>"+appid +"</appid>";
  bodyData += "<mch_id>"+mchid+"</mch_id>"
  bodyData += "<money>1000</money>"
  bodyData += "<sign>7DDF9A72B562D4F054617FE44059BB4F</sign>"
  bodyData += "</xml>";
  var stringA="appid="+appid+"&mch_id"+mchid +"&money=1000";
  
  
  var s = "BA6B9BEB9AF8BB7EDDCDC2A9ACAC8F3A"
   var response = {
       "appId":appid,
       "timeStamp":wxpay.createTimeStamp(), //时间戳
       "nonceStr":wxpay.createNonceStr(),//随机字符串
       "package":"prepay_id=5c4d65cf8da13c25495ccc80",//prepay_id
       "signType":"MD5",
       'paySign': s,
   };
   console.log(response);
   res.end(JSON.stringify(response));
})
 
var server = app.listen(3000, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})