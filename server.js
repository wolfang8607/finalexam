var express   =     require("express");
var bodyParser  =    require("body-parser");
var app       =     express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/',function(req,res){
  res.sendfile("110410509.html");
});


app.listen(5000,function(){
  console.log("伺服器正常運作");
})
