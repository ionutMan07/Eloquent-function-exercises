// ex.1 solution 1

// let min = (x, y) => {
//   return Math.min(x, y);
// };

//ex.1 solution 2

// function min(a, b) {
//   if (a < b) return a;
//   else return b;
// }
// console.log(min(0, 10));
// console.log(min(0, -10));

//ex.2 solution 1

// let isEven = (x) => {
//   if (x > 0 && x % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// function isEven(n) {
//   if (n === 0) return true;
//   else if (n === 1) return false;
//   else if (n < 0) return isEven(-n);
//   else return isEven(n - 2);
// }

// console.log(isEven(50));
// console.log(isEven(75));
// console.log(isEven(-2));

// ex3. solution 1

// let countBs = function (string) {
//   let count = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === 'B') {
//       count++;
//     }
//   }
//   return count;
// };

// let countChar = function (x, y) {
//   let countC = 0;
//   for (let i = 0; i < x.length; i++) {
//     if (x[i] === y) {
//       countC++;
//     }
//   }
//   return countC;
// };

// console.log(countBs('BBBBC'));
// console.log(countChar('kakkerlak', 'k'));

//ex3. solution 2

function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, 'B');
}

console.log(countBs('BBC'));
console.log(countChar('kakkerlak', 'k'));
