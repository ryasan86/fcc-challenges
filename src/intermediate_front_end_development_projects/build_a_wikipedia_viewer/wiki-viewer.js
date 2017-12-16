let xhr = new XMLHttpRequest();
let baseUrl = `https://en.wikipedia.org/w/api.php?`;
let search = document.querySelector('#search');
let input = document.querySelector('#input');
let output = document.querySelector('#output');
let response;
let thumbnailData;
let thumbnailUrl;
search.addEventListener('click', makeRequest);

function xhrStep(queryStr, term) {
  xhr.onreadystatechange = loadData;
  xhr.open('GET', baseUrl + queryStr + term);
  xhr.send(null);
}

function makeRequest() {
  if (input.value) {
    xhrStep(`action=opensearch&format=json&origin=*&search=`, input.value);
    input.value = '';
  } else {
    output.innerHTML = `<h2>Nothing to Search!</h2>`;
  }
}

function makeThumbnailUrl(term) {
  term = term.replace(/\s/g, '%20');
  return term;
}

function loadData() {
  try {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        response = JSON.parse(xhr.responseText);
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
  let content = `<h2>Search Results</h2>
  <ul>
  ${searchResults[1]
    .map(function(result, i) {
      console.log(makeThumbnailUrl(result));
      return `<li>
        <p>
        <a href="${searchResults[3][i]}" target="_blank">
        <h3>${result}</h3>
        <img src="" alt="${result}"> <br>
        </a>
        ${searchResults[2][i]}
        </p>
        </li>`;
    })
    .join('')}
    </ul>`;
  output.innerHTML = content;
}
