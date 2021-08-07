function findTheOldest(people) {
  const currentYear = new Date().getFullYear();

  const oldest = people.sort(function (tes12, tes22) {
    if (typeof tes12.yearOfDeath === "undefined") {
      tes12.yearOfDeath = currentYear;
    } else if (typeof tes22.yearOfDeath === "undefined") {
      tes22.yearOfDeath = currentYear;
    }

    const personA = tes12.yearOfDeath - tes12.yearOfBirth;
    const personB = tes22.yearOfDeath - tes22.yearOfBirth;

    if (personA > personB) {
      return -1;
    } else {
      return 1;
    }
  });
  return oldest[0];
}

module.exports = findTheOldest;
