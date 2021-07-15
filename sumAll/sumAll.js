function sumAll(valueA, valueB) {
  let total = 0;

  if (
    valueA < 0 ||
    valueB < 0 ||
    typeof valueB !== "number" ||
    typeof valueA !== "number"
  ) {
    return "ERROR";
  } else if (valueA < valueB) {
    for (let i = valueA; i <= valueB; i++) {
      total += i;
    }
    return total;
  } else if (valueA > valueB) {
    for (let i = valueB; i <= valueA; i++) {
      total += i;
    }
    return total;
  }
}

module.exports = sumAll;
