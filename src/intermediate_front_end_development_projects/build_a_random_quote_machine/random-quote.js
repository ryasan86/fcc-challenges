let xhr;
let body = document.body;
let personalizeInput = document.querySelector('#personalizeInput');
let validateInput = document.querySelector('#validateInput');
let newQuoteButton = document.querySelector('#newQuoteButton');

newQuoteButton.addEventListener('click', makeRequest);
personalizeInput.addEventListener('keypress', function(e) {
  let key = e.which || e.keyCode;
  return key === 13 ? makeRequest() : null;
});

function makeRequest() {
  let queryStr = '';
  if (personalizeInput.value) {
    queryStr = `https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q=${personalizeInput.value}`;
    personalizeInput.remove();
  } else {
    queryStr = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';
    personalizeInput.placeholder = 'Personalize Quote...';
  }

  xhr = new XMLHttpRequest();
  xhr.onreadystatechange = loadData;
  xhr.open('GET', queryStr);
  xhr.send(null);
}

function loadData() {
  try {
    // wait for finish to finish
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        // handle data
        let response = JSON.parse(xhr.responseText);
        document.getElementById('output').innerHTML = response.message;
        // add color to background and quote box
        addColor('coloredText', 'coloredButton');
      } else {
        console.log('There was a problem with the request.');
      }
    }
  } catch (e) {
    console.log('Caught Exception: ' + e);
  }
}

function randomColor() {
  let chars = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += chars[Math.floor(Math.random() * chars.length)];
  }
  return color;
}

function addColor(textClass, buttonClass) {
  let getColor = randomColor();
  // background
  body.style.backgroundColor = getColor;
  // input border
  personalizeInput.style.borderColor = getColor;
  let texts = document.getElementsByClassName(textClass);
  let buttons = document.getElementsByClassName(buttonClass);
  // text
  for (let i = 0; i < texts.length; i++) {
    texts[i].style.color = getColor;
  }
  // buttons
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = getColor;
  }
}

makeRequest();
