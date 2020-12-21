const router = require('express').Router()
const getController = require('../contollers/getController')

router.get(`/api/products`, getController.getCards)
router.get(`/dashboard/reference/:ref`, getController.getCardByRef)

module.exports = router
