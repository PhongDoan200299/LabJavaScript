let language = "English";
const firstName = "Phong";
const yearOfBirth = 1999;
const dateOfBirth = 20;
const placeOfBirth = "Da Nang";

if (placeOfBirth === "Da Nang") {
  yearOfBirth = 30;
  // giá trị const không thể gán
  console.log(yearOfBirth);
}

if (true) {
  language = "VietNamese";
  console.log(language);
  // không thể gán let
}
console.log(yearOfBirth);
console.log(language);

const phong =
  "i'm " +
  firstName +
  ",a" +
  (year - yearOfBirth) +
  "year old" +
  dateOfBirth +
  "!";

console.log(phong);

const PhongNew = `I'm $(firstName), a $(year-yearOfBirth) year old $(dateOfBirth)!`;
