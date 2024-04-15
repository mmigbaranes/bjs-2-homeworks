function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = arr.reduce((acc, c) => acc + c);
  let avg = (+(sum /arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// function summElementsWorker(...arr) {

// }

// function differenceMaxMinWorker(...arr) {

// }

// function differenceEvenOddWorker(...arr) {

// }

// function averageEvenElementsWorker(...arr) {

// }

// function makeWork (arrOfArr, func) {

// }
