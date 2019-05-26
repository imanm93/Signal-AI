
var zeroToTens = {};
zeroToTens[0] = "Zero";
zeroToTens[1] = "One";
zeroToTens[2] = "Two";
zeroToTens[3] = "Three";
zeroToTens[4] = "Four";
zeroToTens[5] = "Five";
zeroToTens[6] = "Six";
zeroToTens[7] = "Seven";
zeroToTens[8] = "Eight";
zeroToTens[9] = "Nine";
zeroToTens[10] = "Ten";
zeroToTens[11] = "Eleven";
zeroToTens[12] = "Twelve";
zeroToTens[13] = "Thirteen";
zeroToTens[14] = "Fourteen";
zeroToTens[15] = "Fifteen";
zeroToTens[16] = "Sixteen";
zeroToTens[17] = "Seventeen";
zeroToTens[18] = "Eighteen";
zeroToTens[19] = "Nineteen";
zeroToTens[20] = "Twenty";
zeroToTens[30] = "Thirty";
zeroToTens[40] = "Forty";
zeroToTens[50] = "Fifty";
zeroToTens[60] = "Sixty";
zeroToTens[70] = "Seventy";
zeroToTens[80] = "Eighty";
zeroToTens[90] = "Ninety";

var units = {};
units[0] = "";
units[1] = "Thousand";

/**
 * Convert number into words
 * @param {number} num
 * @return {string}
 */
module.exports = function (num) {

  // Validate Input
  if (typeof num != "number") return "Please input a number type";
  if (num < 1 || num > 1000) return "Number out of bounds, please use numbers from 1 - 1000 only";

  let ans = '';
  let index = 0;

  while (num > 0) {
    if (num % 1000 != 0) {
        ans = helper(num % 1000) + " " + units[index] + " " + ans;
    }
    index++;
    num = Math.floor(num / 1000);
  }

  return ans.trim();

}

/**
 * Convert three digit numbers into english words
 * @param {number} num
 * @return {string}
 */
function helper(num) {

  let ans = "";

  if (num == 0) {
    ans = "";
  }
  else if (num < 20) {
    ans = zeroToTens[num];
  }
  else if (num < 100) {
    ans = zeroToTens[Math.floor(num / 10) * 10];
    if (num % 10 != 0) ans += "-" + zeroToTens[num % 10];
  }
  else {
    ans = zeroToTens[Math.floor(num / 100)] + " Hundred ";
    if (num % 100 != 0) ans += "and " + helper(num % 100);
  }

  return ans.trim();

}
