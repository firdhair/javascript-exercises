function palindromes(palindro) {
  let stringLower = palindro.toLowerCase().replace(/[^A-Za-z]/g, "");

  let stringSplit = stringLower.split("").reverse().join(""); // join them back

  if (stringSplit === stringLower) {
    return true;
  } else {
    return false;
  }
}

module.exports = palindromes;
