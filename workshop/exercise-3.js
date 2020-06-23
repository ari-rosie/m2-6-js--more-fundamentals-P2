// Exercise 3
// ----------

let mostPopularFood = [
  'bean burritos',
  'poke bowl',
  'chicken sliders',
  'pork baby back ribs',
  'chicken burritos',
  'chicken sandwich',
  'cauliflower rice bowl',
  'chicken and waffle sliders',
  'parmesan chicken',
  'buffalo-flavored cauliflower',
];

let listToSort = [...mostPopularFood];

const alphaList = (arr) => {
  return arr.sort();  
}

const printList = (sortArr, rankArr) => {
  sortArr.forEach(item => {
    console.log(`${item} (${rankArr.indexOf(item) + 1})`);
  });
}

printList(alphaList(listToSort), mostPopularFood);