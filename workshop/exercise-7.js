// Exercise 7
// ----------

let foodPairings = {
  burgers: 'beer',
  fish: 'white wine',
  beef: 'red wine',
  strawberries: 'cream',
};

// createRecommendations function

const createRecommendations = (obj) => {
  let pairs = Object.entries(obj);
  return pairs;
}
const printRecommendations = (arr) => {
  arr.forEach(pair => {
    console.log(`With ${pair[0]}, it is best to have ${pair[1]}.`);
  });
}

// function call (done)
printRecommendations(createRecommendations(foodPairings));
