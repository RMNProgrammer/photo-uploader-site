const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../tmp'))
  },
  filename: function (req, file, cb) {
    let filename = ''
    const originalname = file.originalname.split('.')
    const uniqueSuffix = Math.round(Math.random() * 1e9)
    const format = originalname[originalname.length - 1]
    for(let i = 0; i < originalname.length - 1; i++ ){
      originalname[i] += '.'
      filename += originalname[i]
    }
    cb(null,`${filename}${uniqueSuffix}.${format}`)
  },
})

const upload = multer({ storage: storage })

module.exports = upload