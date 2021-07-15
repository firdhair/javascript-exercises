function leapYears(year) {
  let year1 = year;

  if (year1 % 100 === 0) {
    if (year1 % 400 === 0) {
      return true;
    } else {
      return false;
    }
  } else if (year1 % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = leapYears;
