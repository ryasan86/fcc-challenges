let xhr;
let search = document.querySelector('#search');
let input = document.querySelector('#input');
let output = document.querySelector('#output');

search.addEventListener('click', makeRequest);

function makeRequest() {
  if (input.value) {
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = loadData;
    xhr.open('GET',`https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=${input.value}`);
    xhr.send(null);
    input.value = '';
  } else {
    output.innerHTML = `<h2>Nothing to Search!</h2>`  
  }
}

function loadData() {
  try {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        loadHtml(response);
      } else {
        console.log('Error loading response');
      }
    }
  } catch (e) {
    console.log('Caught exception: ' + e);
  }
}

function loadHtml(searchResults) {
  let allData = searchResults.map(function(resultCollection) {
    return resultCollection;
  });
  console.log(allData);

  let content = `<h2>Search Results</h2>
  <ul>
    ${allData[1]
      .map(function(result, i) {
        return `<li>
        <h3>${result}</h3>
        <p>${allData[2][i]}</p>
        </li>`;
      })
      .join('')}
    </ul>`;
  output.innerHTML = content;
}
