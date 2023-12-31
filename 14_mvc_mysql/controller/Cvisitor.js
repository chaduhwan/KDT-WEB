const Visitor = require(`../model/Visitor`)

exports.main = (req,res) => {
    res.render(`index`)
}

exports.getVisitors= (req,res)=>{
 Visitor.getvisitors((rows)=>{
    res.render(`visitor`,{data : rows});
 });
}

exports.getVisitor =(req,res)=>{
  Visitor.getvisitor(req.query.id,(result)=>{
    res.render(`visitor`,{data : result});
  })
}

exports.postVisitor =(req,res)=>{
  Visitor.postVisitor(req.body,(result)=>{
    res.send({id:result.insertId,name :req.body.name, comment :req.body.comment})
  })
}

exports.patchVisitor=(req,res)=>{
    Visitor.patchVisitor(req.body,()=>{
        res.send({result : true});
    })
}

exports.deleteVisitor =(req,res)=>{
    Visitor.deleteVisitor(req.body,()=>{
        res.send({result : true});
    })
}