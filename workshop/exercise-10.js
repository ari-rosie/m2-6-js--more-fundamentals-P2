// Exercise 10
// -----------

let inputData = {
  name: 'Will Byers',
  age: 9,
  status: 'upside down',
  superpower1: 'can-blink-lights',
  superpower2: null,
  address1: '123 Whatever street',
  addressCity: 'Hawkins',
  addressState: 'Indiana',
  addressCountry: 'United States',
  motherName: 'Joyce Byers',
  motherAge: 35,
  motherStatus: 'worried',
  motherSuperpower1: null,
  motherSuperpower1: null,
  bestFriendName: 'Mike Wheeler',
  bestFriendAge: 9,
  bestFriendStatus: 'frenetic',
  bestFriendSuperpower1: null,
  bestFriendSuperpower1: null,
  girlfriendName: 'Eleven',
  girlfriendAge: 9,
  girlfriendStatus: 'angry',
  girlfriendSuperpower1: 'telepathy',
  girlfriendSuperpower1: 'multiverse portal sealing',
};

// We want a function that can transform it from that shape to this shape:
//
// {
//   "name": "Will Byers",
//   "age": 9,
//   "status": "upside down",
//   "address": {
//     "streetAddress": "123 Whatever street",
//     "city": "Hawkins",
//     "state": "Indiana",
//     "country": "United States"
//   },
//   "superpowers": [
//     "can-blink-lights"
//   ],
//   "relationships": [
//     {
//       "type": "mother",
//       "name": "Joyce Byers",
//       "age": 35,
//       "status": "worried",
//       "superpowers": []
//     },
//     {
//       "type": "girlfriend",
//       "name": "Eleven",
//       "age": 9,
//       "status": "angry",
//       "superpowers": [
//         "telepathy",
//         "multiverse portal sealing"
//       ]
//     }
//   ]
// }

// Specifically:

// - Address becomes nested in an object
// - Instead of `superpower1` and `superpower2`, an array is used
// - Instead of having a "flat" structure for relationships, a new `relationships`
//   array is added, which holds objects for each relationship.
// - Each relationship has a `type`, like mother/best-friend/girlfriend
// - Each relationship also has an array of super powers, same logic as the main
//   `superpowers` array

// NOTE: For superpowers, you should only have as many items as are available.
// For example, the main superpowers array should be:
// ✅ ['can-blink-lights']
// ⛔️ ['can-blink-lights', null]

let keyArr = Object.keys(inputData);
inputData.relationship = [];


const superPowersArray = () => {
  let superpowers = [];
  keyArr.forEach(key => {
    if (key.startsWith('superpower') && inputData[key])
      superpowers.push(inputData[key]);
  })
  inputData.superpowers = superpowers;
}

const addingRelationship = (type, data) => {
  let relValueArr = [];
  keyArr.forEach(key => {
    if (key.startsWith(type)){
      relValueArr.push(data[key]);
    }
  }) 
  let newRelationship = {
    type: type,
    name: relValueArr[0],
    age: relValueArr[1],
    status: relValueArr[2],
    superpowers: relValueArr.slice(3)
  }
  data.relationship.push(newRelationship);

} 

function transformData(data) {
  //address object
  data.address = {
    streetAddress: data.address1,
    city: data.addressCity,
    state: data.addressState,
    country: data.addressCountry
  } 

  //superpowers array
  superPowersArray();

  //relationship object
  addingRelationship('mother', inputData);
  addingRelationship('bestFriend', inputData);
  addingRelationship('girlfriend', inputData);
  return data;

}


// `JSON.stringify` is used to "pretty-print" the output, so that it's easy
// to see what it looks like, and debug any problems.

console.log(JSON.stringify(transformData(inputData), null, 2));
