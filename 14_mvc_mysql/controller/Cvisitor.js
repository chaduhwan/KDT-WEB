const Visitor = require(`../model/Visitor`)

exports.main = (req,res) => {
    res.render(`index`)
}

exports.getVisitor= (req,res) => {
    res.render(`visitor`,{data : Visitor.getVisitors()});
}