
exports.upload = function (req,res,next) {
  const file = req.file 
  if (!file) {
    return res.status(400).send({error_msg:'缺少文件'})
  }
  const path = file.path.replace(/\\/g,'/').replace('tmp','static')

  res.status(200).send({data:path})
}