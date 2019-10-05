const fs = require('fs');
const request = require('request');
const images = require('./images.js');

const saveImages = images => {
  images.forEach((img, index) => {
    request(img).pipe(fs.createWriteStream(`./images/${index}.jpeg`));
  });
};

saveImages(images);
