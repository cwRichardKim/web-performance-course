const { performance } = require('perf_hooks');

// SETUP 🏁

let iterations = 1e6;

class Point {
  constructor(x, y, z) {
    this.x = x;
    this.z = z;
    this.y = y;
  }
}

// 🔚 SETUP

performance.mark('start');

// EXERCISE 💪

while (iterations--) {
  const point = new Point(1, 2, 3);
  delete point.z;
  // point.y = undefined;
  JSON.stringify(point);
}

// add('foo', 'bar');

// iterations = 1e7;

// while (iterations--) {
//   add(a, b);
// }

// 🔚 EXERCISE

performance.mark('end');

performance.measure('My Special Benchmark', 'start', 'end');

const [ measure ] = performance.getEntriesByName('My Special Benchmark');
console.log(measure);
