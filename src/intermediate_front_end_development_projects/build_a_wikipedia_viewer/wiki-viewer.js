let xhr;
let searchButton = document.querySelector('#searchButton');
let input = document.querySelector('#input');
let output = document.querySelector('#output');

searchButton.addEventListener('click', makeRequest);
input.addEventListener('keypress', function(e) {
  let key = e.which || e.keyCode;
  key === 13 ? makeRequest() : null;
});

function makeRequest() {
  if (input.value) {
    let baseUrl = `https://en.wikipedia.org/w/api.php?`;
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = loadData;
    xhr.open(
      'GET',
      baseUrl + `action=opensearch&format=json&origin=*&search=` + input.value
    );
    xhr.send(null);
    input.value = '';
  } else {
    output.innerHTML = `<h1>Nothing to Search!</h1>`;
  }
}

function loadData() {
  try {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        let response = JSON.parse(xhr.responseText);
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
  let content = `
  <h1 class="found">Displaying: ${searchResults[1].length} Results</h1>
    <div class="ui channels">
  ${searchResults[1]
    .map(function(result, i) {
      return `
      <div class="media-content">
          <div class="content">
            <p>
              <a href="${searchResults[3][i]}" target="_blank">
                <h3>${result}</h3>
              </a>
              ${searchResults[2][i]}
            </p>
          </div>
      </div>`;
    })
    .join('')}
    </div>`;

  output.innerHTML = content;
}
