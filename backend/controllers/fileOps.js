let multer = require('multer'), path = require('path');
const DiskStorage = multer.diskStorage({
    destination: '../frontend/public/uploads',
    filename: (req,file,cb)=>{
        cb(`${Date.now()}-${file.originalname}-${path.extname(file.originalname)}`);
    }
})
const fileFilter = (req, file, cb)=>{
    if (file.mimetype.startsWith('image/')) cb(null, true);
    else cb({
        code:'FILE_NOT_ACCEPTED',
        message:'File is not accepted, because it is not an image!'
    }, false);
}
const fileLimits = {fileSize: 5242880};
let upload = multer({
    storage:DiskStorage,
    fileFilter: (req,file,cb)=>{fileFilter(req,file,cb)},
    limits: fileLimits
});
module.exports = upload;