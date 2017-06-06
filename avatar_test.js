var repoOwner = process.argv[2];
var repoName = process.argv[3];
var request = require('request');
var downloadIMG = require('./downloadImg.js');


console.log('Welcome to the GitHub Avatar Downloader!');

var GITHUB_USER = "aishwaryaramachandran";
var GITHUB_TOKEN = "cdd6a1944bbdb0fa5cadcf2be7f4466eedad75ba";

function getRepoContributors(repoOwner, repoName, cb) {
  if(!repoOwner || !repoName){
    console.log('Please add the relevant categories: repo & owner')
  } else {


  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

  var requestOptions = {
    url: requestURL,
    headers: {
      'User-Agent': "this can be anything"
    }
  };

request.get(requestOptions, function (err, response, body){
      if(err){
        cb(err);
      } else {
          console.log('statusCode: ', response.statusCode);
        }

      cb(null, body);

  });
}
}


getRepoContributors(repoOwner, repoName, function(err, result) {
    console.log("Errors:", err);
    var jsonResult = JSON.parse(result);

    jsonResult.forEach(function(element){

    var avatar_url = element.avatar_url;
    var login = element.login;
    downloadIMG(avatar_url, login + ".jpg");
  });

});




