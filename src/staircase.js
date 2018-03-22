'use strict';

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
 * Complete the staircase function below.
 */
function staircase(n) {
    /*
     * Write your code here.
     */
    for(var i=1;i<=n;i++){
        console.log(' '.repeat(n-i)+'#'.repeat(i));
    }

}

function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}
