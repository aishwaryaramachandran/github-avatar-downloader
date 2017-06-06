
var request = require('request');
var fs = require('fs');

function downloadImageByURL(url, filePath){

  var fullPath = "./images/"+filePath;
  // url - remote image URL to 'get'
  //filePath- a local path for where to persist the file

  request.get(url).pipe(fs.createWriteStream(fullPath));

}
module.exports = downloadImageByURL;