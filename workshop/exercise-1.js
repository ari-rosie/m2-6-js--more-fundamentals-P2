// Exercise 1
// ----------

let mostPopularFood = [
  'poke bowl',
  'chicken sliders',
  'pork baby back ribs',
  'chicken burritos',
  'chicken sandwich',
  'cauliflower rice bowl',
  'chicken and waffle sliders',
  'parmesan chicken',
  undefined,
];


//function removes specific items from list, returns new array
const removeItem = (arr, item) => {
  return arr.filter(food => food !== item);
}

//adds first and last items, returns an array
const fixList = (arr, first, last) => {
  arr.push(last);
  arr.unshift(first);
  return arr;
}

//prints each item of an array
const printList = (arr) => {
  arr.forEach(item => {
    console.log(`${arr.indexOf(item) + 1}. ${item}`);
  })  
}

printList(fixList(removeItem(mostPopularFood, undefined), 'bean burritos', 'buffalo-flavored cauliflower'));