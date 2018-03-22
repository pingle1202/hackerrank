'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    /*
     * Write your code here.
     */

     var AMPM = s.substring(s.length-2,s.length);
     var str = s.substring(0,s.length-2);
     console.log(AMPM);
    var hour = str.split(":")[0];
    var minute = str.split(":")[1];
    var second = str.split(":")[2];
    if(AMPM=='PM' && hour!='12') hour = parseInt(hour,10)+12;
    if(AMPM=='AM' && hour=='12') hour = '00'
    return `${hour}:${minute}:${second}`
    
    

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
