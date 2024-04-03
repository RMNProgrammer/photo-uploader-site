const generateRandomId = require('../utils/generateRandomId')
const file = require('../models/File')

const get = (req, res) => {
    res.render('index')
}

const post = async (req, res) => {
    const id = generateRandomId()
    await file.create({
        file_id: id,
        file_name: req.file.filename 
    })
    res.redirect(`/file/${id}`)
}

module.exports = {
    get, 
    post
}