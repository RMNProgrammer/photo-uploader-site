const homepageController = require('../controller/homepageController')
const deleteController = require('../controller/deleteController')
const photoController = require('../controller/photoController')
const upload = require('../helpers/upload')
const resize = require('../helpers/resize')
const express = require('express')

const router = express.Router()

router.get('/', homepageController.get)
router.get('/file/:id', photoController.get)
router.get('/delete/:id', deleteController.get)
router.post('/', 
    upload.single('upload-image'), 
    resize,
    homepageController.post
)

module.exports = router