function repeatString(a, b) {
  let storeString = "";
  if (b >= 0) {
    for (let i = 0; i < b; i++) {
      storeString += a;
    }
    return storeString;
  } else {
    return "ERROR";
  }
}
module.exports = repeatString;
