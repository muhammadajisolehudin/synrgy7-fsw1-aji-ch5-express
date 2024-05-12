//untuk file utama yang akan di jalankan
const Express = require('express')
const app = Express()
//untuk membuat path baru
const path = require('path');

const router = require('./src/routes')

app.use(Express.static('public'))
app.use(Express.json())
app.use(Express.urlencoded({ extended: false }))

//meng integrasikan ejs pada express
app.set('view engine', 'ejs')
//atur path sesuai posisi src/views/index.js
app.set('views', path.join('src', 'views'));

// app.get('/views', (req, res)=>{
//     res.render('index', { name: 'aji'})
// })


app.use(router)
const port=8000
app.listen(port, ()=>console.log('Server is Running...'))