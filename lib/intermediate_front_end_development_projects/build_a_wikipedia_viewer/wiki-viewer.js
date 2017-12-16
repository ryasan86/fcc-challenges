'use strict';

var xhr = new XMLHttpRequest();
var baseUrl = 'https://en.wikipedia.org/w/api.php?';
var search = document.querySelector('#search');
var input = document.querySelector('#input');
var output = document.querySelector('#output');
var response = void 0;
var thumbnailData = void 0;
var thumbnailUrl = void 0;
search.addEventListener('click', makeRequest);

function makeRequest() {
  if (input.value) {
    xhr.onreadystatechange = loadData;
    xhr.open('GET', baseUrl + ('action=opensearch&format=json&origin=*&search=' + input.value));
    xhr.send(null);
    input.value = '';
  } else {
    output.innerHTML = '<h2>Nothing to Search!</h2>';
  }
}

function loadData() {
  try {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        var _response = JSON.parse(xhr.responseText);
        constructHtml(_response);
      } else {
        console.log('Error loading response');
      }
    }
  } catch (e) {
    console.log('Caught exception: ' + e);
  }
}

function makeThumbnailRequest(searchTerm) {
  searchTerm = searchTerm.replace(/\s/g, '%20');
  xhr.onreadystatechange = loadThumbnail;
  xhr.open('GET', baseUrl + ('action=query&formatversion=2&format=json&prop=pageimages&origin=*&titles=' + searchTerm));
  xhr.send(null);

  function loadThumbnail() {
    try {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          response = JSON.parse(xhr.responseText);
          thumbnailData = response.query.pages[0].thumbnail.source;
        } else {
          console.log('Error loading response');
        }
      }
    } catch (e) {
      console.log('Caught exception: ' + e);
    }
  }
  return thumbnailData;
}

function constructHtml(searchResults) {
  var content = '<h2>Search Results</h2>\n  <ul>\n  ' + searchResults[1].map(function (result, i) {
    console.log(makeThumbnailRequest(result));
    return '<li>\n        <p>\n        <a href="' + searchResults[3][i] + '" target="_blank">\n        <h3>' + result + '</h3>\n        <img src="" alt="' + result + '"> <br>\n        </a>\n        ' + searchResults[2][i] + '\n        </p>\n        </li>';
  }).join('') + '\n    </ul>';
  output.innerHTML = content;
}