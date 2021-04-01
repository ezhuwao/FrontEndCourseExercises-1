const ftoc = function(fTemp) {
let fToCel = (fTemp - 32) * 5 / 9;
result =Math.round(fToCel * 10) / 10;
return result;
}

const ctof = function(cTemp) {
  let celToF = cTemp * 9 / 5 + 32;
  result = Math.round(celToF* 10) / 10;
  return result;
}

module.exports = {
  ftoc,
  ctof
}
