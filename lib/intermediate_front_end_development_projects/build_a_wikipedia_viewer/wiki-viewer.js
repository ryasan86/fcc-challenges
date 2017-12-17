'use strict';

var xhr = void 0;
var searchButton = document.querySelector('#searchButton');
var input = document.querySelector('#input');
var output = document.querySelector('#output');

searchButton.addEventListener('click', makeRequest);
input.addEventListener('keypress', function (e) {
  var key = e.which || e.keyCode;
  key === 13 ? makeRequest() : null;
});

function makeRequest() {
  if (input.value) {
    var baseUrl = 'https://en.wikipedia.org/w/api.php?';
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = loadData;
    xhr.open('GET', baseUrl + 'action=opensearch&format=json&origin=*&search=' + input.value);
    xhr.send(null);
    input.value = '';
  } else {
    output.innerHTML = '<h1>Nothing to Search!</h1>';
  }
}

function loadData() {
  try {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        constructHtml(response);
      } else {
        console.log('Error loading response');
      }
    }
  } catch (e) {
    console.log('Caught exception: ' + e);
  }
}

function constructHtml(searchResults) {
  var content = '\n  <h1 class="found">Displaying: ' + searchResults[1].length + ' Results</h1>\n    <div class="ui channels">\n  ' + searchResults[1].map(function (result, i) {
    return '\n      <div class="media-content">\n          <div class="content">\n            <p>\n              <a href="' + searchResults[3][i] + '" target="_blank">\n                <h3>' + result + '</h3>\n              </a>\n              ' + searchResults[2][i] + '\n            </p>\n          </div>\n      </div>';
  }).join('') + '\n    </div>';

  output.innerHTML = content;
}