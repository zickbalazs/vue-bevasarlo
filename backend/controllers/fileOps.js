let multer = require('multer'), path = require('path');
const DiskStorage = multer.diskStorage({
    destination: './uploads',
    filename: (req,file,cb)=>{
        cb(null, `${Date.now()}-${file.originalname}`);
    }
})
const fileFilter = (req, file, cb)=>{
    if (file.mimetype.startsWith('image/')) cb(null, true);
    else cb({
        code:'FILE_NOT_ACCEPTED',
        message:'File is not accepted, because it is not an image!'
    }, false);
}
let upload = multer({
    storage:DiskStorage,
    fileFilter: (req,file,cb)=>{fileFilter(req,file,cb)},
    limits: {
        fileSize: 5242880
    }
});
module.exports = upload;