module.exports = function midpoint(a, b) {
  var angles = [a, b];
  var range;
  var baseAngle;
  var result;

  angles.sort(function (a, b) {
    return a - b;
  });

  range = angles[1] - angles[0];
  baseAngle = angles[0];

  // get the smaller angle and adjust the base angle
  if (range > 180) {
    range = 360 - range;
    baseAngle = angles[1];
  }

  result = (range / 2) + baseAngle;

  if (result >= 360) { result -= 360; }

  return result;
}
