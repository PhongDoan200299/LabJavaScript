let myCountry = 100000000;
let population = 1000000000;
// let halfPopulation = (population /= 2);

console.log((population /= 2));

console.log(population + 1);

let phanLanPopulation = 6000000;
if (population > phanLanPopulation) {
  console.log(
    "Dan so cua toi: " + population + " Dan so Phan Lan: " + phanLanPopulation
  );
}

let avePopulation = population >= 33000000;
if (avePopulation) {
  console.log(`Dat so dan trung binh`);
}

let description =
  country + "and its" + population + "million people speak " + language;
