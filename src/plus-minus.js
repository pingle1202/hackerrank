"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", inputStdin => {
  inputString += inputStdin;
});

process.stdin.on("end", _ => {
  inputString = inputString
    .trim()
    .split("\n")
    .map(str => str.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the plusMinus function below.
 */
function plusMinus(arr) {
  /*
     * Write your code here.
     */
  var positive = 0;
  var negative = 0;
  var zero = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive++;
    } else if (arr[i] < 0) {
      negative++;
    } else {
      zero++;
    }
  }
  console.log(positive / arr.length);
  console.log(negative / arr.length);
  console.log(zero / arr.length);
}

function main() {
  const n = parseInt(readLine(), 10);

  const arr = readLine()
    .split(" ")
    .map(arrTemp => parseInt(arrTemp, 10));

  plusMinus(arr);
}
