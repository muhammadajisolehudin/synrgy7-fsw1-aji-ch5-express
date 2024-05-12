//untuk file utama yang akan di jalankan
const Express = require('express')
const app = Express()

const router = require('./routes')

app.use(Express.static('public'))
app.use(Express.json())
app.use(Express.urlencoded({ extended: false }))

app.use(router)
const port=8000
app.listen(port, ()=>console.log('Server is Running...'))