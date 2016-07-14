var midpoint = require('../lib/midpoint');

var assert = require('chai').assert;

describe('Midpoint', function () {

  describe('should find the compass midpoint', function () {
    var testPoints = [
      { pointA: 0, pointB: 90, expected: 45 },
      { pointA: 0, pointB: 180, expected: 90 },
      { pointA: 0, pointB: 270, expected: 315 },
      { pointA: 90, pointB: 180, expected: 135 },
      { pointA: 90, pointB: 270, expected: 180 },
      { pointA: 180, pointB: 270, expected: 225 },
      { pointA: 0, pointB: 359, expected: 359.5 },
      { pointA: 357, pointB: 359, expected: 358 },
      { pointA: 4, pointB: 358, expected: 1 },

      { pointA: 0, pointB: 200, expected: 280 },
      { pointA: 0, pointB: 358, expected: 359 },
    ];

    testPoints.forEach(function (testPoint) {
      it(['calculates the midpoint for', testPoint.pointA, 'and', testPoint.pointB].join(' '), function () {
        var actual = midpoint(testPoint.pointA, testPoint.pointB);

        assert.equal(testPoint.expected, actual);
      });
    });

  });
});