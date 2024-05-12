// untuk validasi kita gunakan middleware

//ini middleware sebelum menjalankan funtion akan diperiksa dulu dengan jembatan ini jika tidak lolos validasi akan gagal ke function atau jembatan berikutnya
const idChecker = (req, res, next) =>{
   const { id } = req.params;
    const newId = +id;

    (newId > 0) ? next()
    : res.status(400).json({ message: 'id not valid' });
    
}

module.exports = { idChecker }