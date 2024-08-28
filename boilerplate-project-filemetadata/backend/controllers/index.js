const express = require('express');
const multer = require('multer');
const path = require('path');
require('dotenv').config();

const storage = multer.diskStorage({
 destination:(req,file,cb)=>{
    cb(null, process.env.UPLOAD_DIR);
 },
 filename:(req, file, cb)=>{
    cb(null, Date.now() + path.extname(file.originalname));
 }
});

const upload = multer({ storage });


const fileupload=(req,res)=>{
if(req.file){
    const fileName=req.file.originalname;
    const fileType=req.file.mimetype;
    const fileSize =req.file.size;

    res.status(200).json({
        message: 'File uploaded successfully',
        fileName: fileName,
        fileType: fileType,
        fileSize: fileSize
    });
} else {
    res.status(400).send('No file uploaded');


}

}

module.exports = { upload ,fileupload};
  