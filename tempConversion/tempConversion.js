const ftoc = function (suhu) {
  let temp = suhu;
  let convCel = ((suhu - 32) * 5) / 9;
  let roundCel = Math.round(convCel * 10) / 10;
  return roundCel;
};

const ctof = function (suhu) {
  let temp = suhu;
  let convFar = (suhu * 9) / 5 + 32;
  let roundFar = Math.round(convFar * 10) / 10;
  return roundFar;
};

module.exports = {
  ftoc,
  ctof,
};
