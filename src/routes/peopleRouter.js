// const express = require('express');
// const router = express.Router();

//perintah diatas sama dengan ini
const router = require('express').Router()
//import funtion dari service
const { getPeople, getPeopleById, deletePeopleById, addPeople, updatePeopleById } = require('../services/peopleService')

router.get('/', getPeople)
router.get('/:id', getPeopleById)
router.post('/add', addPeople)
router.put('/update/:id', updatePeopleById)
router.delete('/:id', deletePeopleById)

module.exports = router
