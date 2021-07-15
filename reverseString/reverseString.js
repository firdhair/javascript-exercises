let stringFirst = "";
function reverseString(a) {
  stringFirst = a;
  let stringSplit = stringFirst.split("");
  let stringReverse = stringSplit.reverse();
  let stringJoin = stringReverse.join("");

  return stringJoin;
}

module.exports = reverseString;
