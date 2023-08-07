const comment =require(`../model/MComment`);

exports.main = (req,res)=>{
    res.render(`index`);
};

exports.comments = (req,res)=>{
    res.render(`comments`,{commentInfos:comment.comments()})
};

exports.comment = (req,res)=>{
    console.log(req.params);
    console.log(req.params.id);

    const commentId =req.params.id
    const comments = comment.comments();
    console.log(comments[commentId-1]);
    res.render(`comment`,{commentInfo:comments[commentId-1]})
};

exports.Work = (req,res)=>{
    res.render(`work`)
}

exports.axiosWork = (req,res)=>{
    console.log(`back`,req.body);
    const rightid = "enghks23";
    const rightpw = "123123";
    if(rightid===req.body.id && rightpw === req.body.pw){
        res.send(true)
        console.log(true)
    } else {
        res.send(false)
        console.log(false)
    }
}