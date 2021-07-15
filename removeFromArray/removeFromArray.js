function removeFromArray(first, ...theArgs) {
  let myArr = [];
  let args = [...theArgs];
  // turn arguments into real array

  for (let i = 0; i < first.length; i++) {
    // to see if first[i] is found in args
    let match = false; // not found yet
    for (let j = 0; j < args.length; j++) {
      if (first[i] === args[j]) {
        // if found in args then continue to next array index
        match = true;
        continue;
      }
    }
    // first[i] will be pushed to myArray if match wasn't found
    if (!match) {
      myArr.push(first[i]);
    }
  }
  return myArr;
}

module.exports = removeFromArray;
