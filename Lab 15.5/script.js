let country = "VietNam";
let population = 15;
let avePopulation = population > 33;
if (avePopulation) {
  console.log(`${country} 's population is above average`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average `
  );
}
