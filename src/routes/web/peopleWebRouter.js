const router = require('express').Router()

const { index } = require('../../services/peopleService');

router.get('/', index);

module.exports = router