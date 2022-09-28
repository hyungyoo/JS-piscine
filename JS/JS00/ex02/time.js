/**
 * A function that creates an object
 * @param {*} month Set object property
 */
function Time(month) {
    this.month = month;
}

const month = new Time(7);
let day = 13;

/**
 * Accessing the global object and changing the month/day
 * @param {*} newMonth new Month for global object
 * @param {*} newDay new Day for global variable
 */
const timeWarp = (newMonth, newDay) => {
  month.month = newMonth > 0 && newMonth < 13 ? newMonth : month.month;
  day = newDay > 0 && newDay < 31 ? newDay : day;
}

console.log(month.month);
console.log(day);

timeWarp(9, 15);

console.log(month.month);
console.log(day);