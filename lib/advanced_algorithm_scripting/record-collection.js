'use strict';

var _chai = require('chai');

// Setup
var collection = {
  '2548': {
    album: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  '2468': {
    album: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  '1245': {
    artist: 'Robert Palmer',
    tracks: []
  },
  '5439': {
    album: 'ABBA Gold'
  }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  // if prop ISN'T "tracks" AND value ISN't empty, update or set property.
  if (prop !== 'tracks' && value) {
    collection[id][prop] = value;
    /* HANDLING INCOMPLETE DATA */
    // If prop is "tracks" but the album doesn't have a "tracks" property, create an empty array before adding the new value to the album's corresponding property.
  } else if (prop === 'tracks' && !collection[id][prop]) {
    collection[id][prop] = [];
    collection[id][prop].push(value);
    // If prop is "tracks" and value isn't empty (""), push the value onto the end of the album's existing tracks array.
  } else if (prop === 'tracks' && value) {
    collection[id][prop].push(value);
    // If value is empty (""), delete the given prop property from the album.
  } else if (!value) {
    delete collection[id][prop];
  }

  return collection;
}

// Alter values below to test your code
updateRecords(5439, 'artist', 'ABBA'); // should be "ABBA".
updateRecords(5439, 'tracks', 'Take a Chance on Me'); // tracks should have "Take a Chance on Me" as the last element.
console.log(collection['5439']);
updateRecords(5439, 'tracks', 'test');
console.log(collection['5439']);
updateRecords(2548, 'artist', ''); // artist should not be set.
console.log(collection['2548']);
updateRecords(1245, 'tracks', 'Addicted to Love'); // tracks should have "Addicted to Love" as the last element.
console.log(collection['1245']);
updateRecords(2548, 'tracks', ''); // tracks should not be set
console.log(collection['2548']);