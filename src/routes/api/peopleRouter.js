// const express = require('express');
// const router = express.Router();

//perintah diatas sama dengan ini
const router = require('express').Router()
const { response } = require('express')
//import funtion dari service
const { getPeople, getPeopleById, deletePeopleById, addPeople, updatePeopleById, uplodeImagePeople } = require('../../services/peopleService')
const { idChecker } = require('../../middlewares/idChecker')
const uplode = require('../../middlewares/uplodeHandler')
// const uplodeHandler = require('../../middlewares/uplodeHandler')


router.get('/', getPeople)
//contoh penggunaan middleware 'idChecker'
router.get('/:id', idChecker, getPeopleById)
router.post('/add', addPeople)
router.put('/update/:id', idChecker, updatePeopleById)
router.delete('/:id', idChecker, deletePeopleById)

//penggunaan middleware uplode
router.post('/uploade', uplode.single('image'), uplodeImagePeople)

module.exports = router
