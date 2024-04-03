const file = require('../models/file')
const path = require('path')
const fs = require('fs')

const get = async (req, res) => {
    const photo = await file.findOne({
        where: {
            file_id: req.params.id,
        },
    })
    fs.unlinkSync(path.join(__dirname,`../public/uploads/${photo.file_name}`))
    await file.destroy({
        where: {
            id: photo.id
        }
    })
    res.redirect('/')
}

module.exports = {
    get
}