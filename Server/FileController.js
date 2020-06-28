exports.getStatus = (req,res,next) =>{
    const FileId = req.body
    return res.status('200').json({
        msg: 'Status is this'
    })
}

exports.postFile = (req,res,next) =>{
    const file = req.body
    return res.status('200').json({
        msg: 'File Uploaded'
    })
}