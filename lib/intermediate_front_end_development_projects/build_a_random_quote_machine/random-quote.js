'use strict';

var xhr;
document.getElementById('submit').addEventListener('click', makeRequest);

function makeRequest() {
  xhr = new XMLHttpRequest();
  xhr.onreadystatechange = textContent;
  xhr.open('GET', 'https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q=Ryan');
  xhr.send(null);
}

function textContent() {
  try {
    // wait for finish to finish
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        // handle data
        var response = JSON.parse(xhr.responseText);
        document.getElementById('output').innerHTML = response.message;
        // add color to background and quote box
        addColor('colored-text', 'colored-button');
      } else {
        console.log('There was a problem with the request.');
      }
    }
  } catch (e) {
    console.log('Caught Exception: ' + e);
  }
}

function randomColor() {
  var chars = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += chars[Math.floor(Math.random() * chars.length)];
  }
  return color;
}

function addColor(textClass, buttonClass) {
  var getColor = randomColor();
  // background
  document.body.style.backgroundColor = getColor;
  // text
  var texts = document.getElementsByClassName(textClass);
  // buttons
  var buttons = document.getElementsByClassName(buttonClass);
  for (var i = 0; i < texts.length; i++) {
    texts[i].style.color = getColor;
  }
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = getColor;
  }
}

makeRequest();