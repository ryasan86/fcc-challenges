var xhr;
let term = 'test'; // set term to blank later
let baseUrl = `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${term}`;
let search = document.querySelector('#search');
let input = document.querySelector('#input');

search.addEventListener('click', makeRequest);

function makeRequest() {
  xhr = new XMLHttpRequest();
  xhr.onreadystatechange = loadData;
  xhr.open('GET', baseUrl);
  xhr.send(null);
}

function loadData() {
  try {
    if (xhr.readystate === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        console.log(xhr.responseText);
      } else {
        console.log('Error loading response');
      }
    }
  } catch (e) {
    console.log('Caught exception: ' + e);
  }
}

function foo(data) {
  // do stuff with JSON
}

var script = document.createElement('script');
script.src = '//example.com/path/to/jsonp?callback=foo';

document.getElementsByTagName('head')[0].appendChild(script);
// or document.head.appendChild(script) in modern browsers
