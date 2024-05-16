const { data } = require('../models/people')

const getPeople = (req, res) => {
    res.json({ message: 'suksess', data})
}

const getPeopleById = (req, res) =>{
    const { id } = req.params;

    const person = data.find((row) => row.id === parseInt(id));
    !person ? res.status(404).json({ message: 'Person not found' })
    : res.json({ message: 'success', data: person });
}

const addPeople = (req, res) => {
    const { id, name, username, email } = req.body

    const isIdExists = data.some(item => item.id === id)
    isIdExists ? (()=>{
        res.status(400).json({ message: 'ID already exists' })
        return
    })()
    :(()=>{
        const newData = { id, name, username, email };
        data.push(newData);  // Menambahkan ke array

        res.status(201).json({ message: 'Data created successfully', data: newData })
    })()
}

const updatePeopleById = (req, res) => {
    const { id } = req.params; // Mengambil ID dari URL
    const { name, username, email } = req.body; // Mengambil data baru dari body request

    // Cari index data yang ingin diperbarui
    const index = data.findIndex(row => row.id === parseInt(id))

    index !== -1 ? (() => {
        // Data ditemukan, perbarui dengan data baru
        data[index] = { id, name, username, email }
        res.json({ message: 'Data updated successfully', data: data[index] })
    })()
    : res.status(404).json({ message: 'Data not found' });
}


const deletePeopleById = (req, res) => {
    const { id } = req.params
    const index = data.findIndex(row => row.id === parseInt(id))
    index !== -1 ? (() => {
        const [deletedItem] = data.splice(index, 1);  // Menghapus item dari array
        res.json({ message: 'data can be deleted : ', deletedData: deletedItem });
    })()
    : res.status(404).json({ message: 'Data not found' });
}

//function untuk view integrasi ejs
const index = (req, res) => {

      const peoples = data;
      res.render('index', {
        peoples,
      });
   
  }

//untuk uplode image dengan multer
const uplodeImagePeople = (req, res) => {
    try {
        const url = `/uplode/${req.file.filename}`
        res.status(200).json({ message: 'uploaded suksess', url}) 
    } catch (error) {
        console.log(err)
        res.status(500).json({ message: 'Internal server error'})
    }
    
}

// untuk akses file yang sudah i post 
// gunakan get 
// get : http://localhost:8000/uplode/0.40201096046082263.pdf

module.exports = { getPeople, getPeopleById, deletePeopleById, addPeople, updatePeopleById, index, uplodeImagePeople }