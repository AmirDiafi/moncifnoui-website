const router = require('express').Router()
const deleteController = require('../contollers/deleteController')
const multer = require('multer')


router.post('/delete_product',
multer().single(),
deleteController.removeCard)

module.exports = router