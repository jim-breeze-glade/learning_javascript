const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {
  // User Story 2: If value is empty string, delete the property
  if (value === "") {
    delete records[id][prop];
  }
  // User Story 4: If prop is "tracks" and value is not empty, 
  // but album doesn't have tracks property, create empty array and add value
  else if (prop === "tracks" && !records[id].hasOwnProperty("tracks")) {
    records[id][prop] = [value];
  }
  // User Story 5: If prop is "tracks" and value is not empty,
  // add value to existing tracks array
  else if (prop === "tracks") {
    records[id][prop].push(value);
  }
  // User Story 3: If prop isn't "tracks" and value isn't empty,
  // assign value to that prop
  else {
    records[id][prop] = value;
  }
  
  // User Story 1: Always return the entire records object
  return records;
}

// Test cases
console.log("Test 2:", updateRecords(recordCollection, 5439, "artist", "ABBA"));
console.log("\nTest 3:", updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"));
console.log("\nTest 4:", updateRecords(recordCollection, 2548, "artist", ""));
console.log("\nTest 5:", updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"));
console.log("\nTest 6:", updateRecords(recordCollection, 2468, "tracks", "Free"));
console.log("\nTest 7:", updateRecords(recordCollection, 2548, "tracks", ""));
console.log("\nTest 8:", updateRecords(recordCollection, 1245, "albumTitle", "Riptide"));