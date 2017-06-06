 var request = require('request');
 var fs = require('fs');

// console.log('Welcome to the GitHub Avatar Downloader!');

// var GITHUB_USER = "aishwaryaramachandran";
// var GITHUB_TOKEN = "cdd6a1944bbdb0fa5cadcf2be7f4466eedad75ba";

// function getRepoContributors(repoOwner, repoName, cb) {
//   var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

//   var requestOptions = {
//     url: requestURL,
//     headers: {
//       'User-Agent': "this can be anything"
//     }
//   };

//   request.get(requestOptions, function (err, response, body){
//     if(err){
//           cb(err);
//          } else {

//           cb(null, body);
//          }
//   });
// }

// getRepoContributors("jquery", "jquery", function(err, result) {
//   console.log("Errors:", err);
//   console.log("Result:", JSON.parse(result));

// });


function downloadImageByURL(url, filePath){
  // url - remote image URL to 'get'
  //filePath- a local path for where to persist the file
  var urlPic = url + filePath;
  request(urlPic).pipe(fs.createWriteStream('avatar.png'))

}

downloadImageByURL("https://avatars2.githubusercontent.com/u/2741?v=3&s=466", "avatars/kvirani.jpg");