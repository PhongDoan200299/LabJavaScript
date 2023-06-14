// let massMark = 78;
// let massJohn = 92;
// let heightMark = 1.69;
// let heightJohn = 1.95;

let massMark = 95;
let massJohn = 85;
let heightMark = 1.88;
let heightJohn = 1.76;

// let mass;
// let height;
// let BMI = max / (height * height);
let markBMI = massMark / (heightMark * heightMark);
let johnBMI = massJohn / (heightJohn * heightJohn);
let markHightBMI = markBMI > johnBMI;

if (markHightBMI) {
  console.log(" Mark's BMI is higher than John's!");
  console.log(`Mark's BMI ${markBMI} is higher than john's BMI ${johnBMI}`);
} else {
  console.log("John's BMI is higher than Mark's!");
  console.log(`John's BMI ${johnBMI} is higher than Mark's BMI ${markBMI}`);
}
