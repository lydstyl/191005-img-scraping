const fs = require('fs')
const request = require('request')
const images = require('./images.js')

const saveImages = (images) => {
  // remove duplicates then save images
  // master
  ;[...new Set(images)].forEach((img, index) => {
    request(img).pipe(fs.createWriteStream(`./images/${index}.jpeg`))
  })
}

saveImages(images)
