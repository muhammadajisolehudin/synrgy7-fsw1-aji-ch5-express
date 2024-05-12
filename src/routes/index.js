const router = require('express').Router()
const peopleRouter = require('./api/peopleRouter')

const peopleWebRouter = require('./web/peopleWebRouter')

router.use('/people', peopleRouter)

router.use('/view', peopleWebRouter)

module.exports = router