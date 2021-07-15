let myArr2 = [];
function removeFromArray(a, b) {
  let myArr = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b) {
      // myArr += a[i];
      myArr.push(a[i]);
      //console.log(a[i]);
    } else {
      continue;
    }
  }
  return myArr;
}

module.exports = removeFromArray;
