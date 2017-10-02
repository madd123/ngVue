var mongoose=require('mongoose');

var docSchema=mongoose.Schema({
  title:String,
  content: Array
  // content: mongoose.Schema.Types.Mixed
});

var Document=mongoose.model('document',docSchema);

var doc={};

doc.open=function (cb) {
  mongoose.connect('mongodb://localhost:27017/ngVue');
  var db=mongoose.connection;
  db.on('error',console.error.bind(console,'连接数据库发生错误： '));
  //TODO：这里的open回调一定要写成函数，不能直接调用
  db.once('open',function () {
    console.log('连接成功')
  });
  doc.con=true;
  cb(mongoose);
};

doc.close=function (con) {
  con.disconnect(function () {
    doc.con=false;
    console.log('断开连接');
  });
};

doc.addDoc=function (title,cb) {
  var tmp=new Document({
    title:title,
  });
  Document.find({title:title},function (err,result) {
    if(result.length===0){
      if(doc.con){
        tmp.save(function (err,result) {
          console.log('保存成功');
          cb(result);
        });
      }
    }else{
      cb(1);
    }
  });
};

doc.addPara=function (title,content,cb) {
  content=content.split('#');
  if(content.length===0){
    return cb(1);
  }
  for(var i=0;i<content.length;i++){
    JSON.parse(content[i]);
    if(i===content.length-1){
      Document.update({title:title},{$push:{ content: content[i]}},function (err,result) {
        if(result.nModified===0){
          return cb(1);
        }
        return cb(0);
      });
    }
    Document.update({title:title},{$push:{ content: content[i]}});
  }
};

doc.getAllDoc=function (cb) {
  Document.find(function (err,result) {
    cb(result);
  })
};

doc.getDoc=function (title,cb) {
  Document.find({title:title},function (err,result) {
    if(err) console.log(err);
    cb(result);
  });
};

doc.removeDoc=function (title,cb) {
  Document.remove({title:title},function (err,result) {
    if(err) console.log(err);
    cb(result);
  })
};

module.exports=doc;