const multer = require('multer')

const path = require('path') 

const PUBLIC_DIR = path.join(__dirname, '../../public')
const UPLODE_DIR = path.join(PUBLIC_DIR, 'uplode')

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, UPLODE_DIR)
    }, 
    filename: (req, file, cb)=>{
        const id = Math.random()
        cb(null, id+path.extname(file.originalname) )
    }

})

module.exports = multer ({ storage })