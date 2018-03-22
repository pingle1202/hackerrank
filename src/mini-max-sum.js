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
 * Complete the miniMaxSum function below.
 */
function miniMaxSum(arr) {
  /*
     * Write your code here.
     */
  var min = Number.MAX_SAFE_INTEGER;
  var max = 0;
  for (var i = 0; i < arr.length; i++) {
      var temp=0-arr[i];
    for (var j = 0; j < arr.length; j++) {
        temp+=arr[j];
    }
    if(temp<min)min=temp;
    if(temp>max)max=temp;
  }
  console.log(`${min} ${max}`);
}

function main() {
  const arr = readLine()
    .split(" ")
    .map(arrTemp => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
