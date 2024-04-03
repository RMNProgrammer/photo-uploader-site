const file = require('../models/file')

const get = async (req, res) => {
    const photo = await file.findOne({
        where: {
            file_id: req.params.id,
        },
    })
    res.render('photo',{
        id: photo.file_id,
        path: `${process.env.URL}/uploads/${photo.file_name}`   
    })
}

module.exports = {
    get
}