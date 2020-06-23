// Exercise 2
// ----------

const lateComers = ['Felicia', 'Charles', 'Terry'];
const earlyBirds = ['Ellen', 'Jerry', 'Jasmine'];

const printGuestOrder = (arr1, arr2) => {
    arr = arr1.concat(arr2);
    arr.forEach(guest => {
        console.log(`${arr.indexOf(guest) + 1}. ${guest}`);
    })
}

printGuestOrder(earlyBirds, lateComers);