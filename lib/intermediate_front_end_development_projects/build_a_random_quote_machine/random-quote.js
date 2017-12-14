'use strict';

var xhr;
var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', '#472E32', '#BDBB99', '#77B1A9', '#73A857'];
document.getElementById('submit').addEventListener('click', makeRequest);

function makeRequest() {
  xhr = new XMLHttpRequest();
  xhr.onreadystatechange = textContent;
  xhr.open('GET', 'https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q=Ryan');
  xhr.send(null);
}

function textContent() {
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
  try {
    // wait for finish to finish
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        // handle data
        var response = JSON.parse(xhr.responseText);
        document.body.style.backgroundColor = randomColor;
        document.getElementById('output').innerHTML = response.message;
        // color quote box text
        colorText('colored-text');
        // color quote box buttons
        colorButtons('colored-button');
      } else {
        console.log('There was a problem with the request.');
      }
    }
  } catch (e) {
    console.log('Caught Exception: ' + e);
  }
}

function colorText(className) {
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  var texts = document.getElementsByClassName(className);
  for (var i = 0; i < texts.length; i++) {
    texts[i].style.color = randomColor;
  }
}

function colorButtons(className) {
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  var buttons = document.getElementsByClassName(className);
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = randomColor;
  }
}

makeRequest();