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


const deletePeopleById = (req, res)=>{
    const { id } = req.params
    const index = data.findIndex(row => row.id === parseInt(id))
    index !== -1 ? (() => {
        const [deletedItem] = data.splice(index, 1);  // Menghapus item dari array
        res.json({ message: 'data can be deleted : ', deletedData: deletedItem });
    })()
    : res.status(404).json({ message: 'Data not found' });
}

module.exports = { getPeople, getPeopleById, deletePeopleById, addPeople, updatePeopleById }