/**VERY HARD: You are given coins of different denominations and a total amount of money amount. 
Write a function to compute the fewest number of coins that you need to make up that amount. If that 
amount of money cannot be made up by any combination of the coins, return -1.
Hint:  Sudo code this problem. Focus on breaking the problem down into steps  Use functions, arrays 
and logical operators.  Do not have anyone give you the answer or solve this problem for you. 
Example 1:
Input: coins = [1, 2, 5], amount = 11
Output: 3 
Explanation: 11 = 5 + 5 + 1
Example 2:
Input: coins = [2], amount = 3
Output: -1
Note: You may assume that you have an infinite number of each kind of coin.
Submission
Submit the URL to your individual repository that contains your assignment  to Canvas.  Make sure to check 

*/



const input = [1, 2, 5]

function compute(array, amount) {
    sortedArray = array.sort(function (a, b) {
        return b - a;
    });
    let coins = 0;
    let tempAmount = amount;

    while (sortedArray.length != 0) {
        for (let i = 0; i < sortedArray.length; i++) {
            while (sortedArray[i] <= tempAmount) {
                tempAmount -= sortedArray[i];

                coins++;
            }
        }

        if (tempAmount === 0) {
            return coins;
        }
        sortedArray.shift();
        coins = 0;
        tempAmount = amount;
    }
    if (sortedArray.length === 0) {
        return -1;
    }
}

console.log("Amount = ", compute(input, 11));