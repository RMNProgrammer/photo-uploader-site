const fs = require('fs')
const sharp = require('sharp')

const resize = async (req, res, next) => {
    await sharp(req.file.path).resize(720).toFile(`public/uploads/${req.file.filename}`)
    sharp.cache(false)
    fs.unlinkSync(req.file.path)
    next()
}

module.exports = resize