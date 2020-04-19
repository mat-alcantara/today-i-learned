// Reverse a given integer
const reverseNumber = (x) => {
  let number = x;
  let revNum = 0;

  while (number > 0) {
    revNum = revNum * 10 + (number % 10);
    number = Math.floor(number / 10);
  }

  return revNum;
};

const reversed = reverseNumber(6458);
console.log(reversed);
