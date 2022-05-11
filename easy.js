/*EASY: Write a function that takes in an array of numbers and outputs the average of all the numbers. 
Example 1:
Input: [1 , 4 , 7]  Output: 4
Input: [10, 5]  Output: 7.5
Input: [1.5, 3, 2.5, 1]  Output: 2
*/

const average = arr => {
    const sum = arr.reduce((a, b) => a + b);
    const average = sum / arr.length;
    return average;
}
console.log(average([1, 4, 7]));