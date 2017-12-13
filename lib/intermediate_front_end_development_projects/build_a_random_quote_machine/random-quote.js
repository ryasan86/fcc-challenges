'use strict';

var xhr;
var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', '#472E32', '#BDBB99', '#77B1A9', '#73A857'];

document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
document.getElementById('submit').addEventListener('click', makeRequest);

function makeRequest() {
  xhr = new XMLHttpRequest();

  xhr.onreadystatechange = textContent;
  xhr.open('GET', 'https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q=Ryan');
  xhr.send(null);
}

function textContent() {
  try {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        var randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
        document.getElementById('output').innerHTML = response.message;
        document.getElementById('quote-box').style.color = randomColor;
        document.getElementById('tweet-quote').style.backgroundColor = randomColor;
        document.getElementById('facebook-quote').style.backgroundColor = randomColor;
        document.getElementById('submit').style.backgroundColor = randomColor;
      } else {
        console.log('There was a problem with the request.');
      }
    }
  } catch (e) {
    console.log('Caught Exception: ' + e);
  }
}

makeRequest();