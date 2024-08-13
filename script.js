'use strict';

// const arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(2,-1));
// console.log(arr.slice(2,4));
// // console.log(arr.splice(-2));
// console.log(arr.at(3));

// const arr2=[5,4,3,2,1];
// console.log(arr2.reverse());
// console.log(arr2)

// const combine = arr.concat(arr2);
// console.log(combine)

// console.log(arr2.join('-'));

// const number = [2,4,5,8,10,['jonas']];
// console.log(number.at(3));
// console.log(number.at(5));
// const str = 'jonas';
// console.log(str.at(-1));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for (const movement of movements){
//   if(movement>0){
//     console.log(`You deposited ${movement}`)
//   }else {
//     console.log(`You withdraw ${movement}`)
//   }
// }
// console.log('--------For Each Loop----------')
// movements.forEach(function(movement){
//   if(movement>0){
//     console.log(`You deposited ${movement}`)
//   }else {
//     console.log(`You withdraw ${Math.abs(movement)}`)
//   }
// })

// const currencies = new Map([
//  ['USD', 'United States dollar'],
//  ['EUR', 'Euro'],
//  ['GBP', 'Pound sterling'],
// ]);
// currencies.forEach(function(value,key,map){
//   console.log(`${key} : ${value}`)
// });
// const checkDogs = function(dogsJulia, dogsKate){
//   const dogsJuliaCorrected = dogsJulia.slice();
//   dogsJuliaCorrected.splice(0,1);
//   dogsJuliaCorrected.splice(-2);
//   const dogs = dogsJuliaCorrected.concat(dogsKate);
//   dogs.forEach(function(dog,i){
//     if(dog>=3){
//       console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
//     }else{
//       console.log(`Dog number ${i + 1} is an puppy, and is ${dog} years old`)
//     };
//   });
// };
// checkDogs([3,5,2,12,7],[4,1,15,8,3]);

// const calcaverageHumanAge = function(ages){
//   const humanAges = ages.map(age=>(age<=2 ? 2*age : 16+age *4));
//   const adults = humanAges.filter(age=>age >=18);
//   console.log(humanAges);
//   console.log(adults);
// };
// const avg = calcaverageHumanAge([5,2,4,1,15,8,3]);

 // ------ Map , filter , reduce -------

// const calcaverageHumanAge = ages =>
//   ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//   .filter(age => age >=18)
//   .reduce((acc,age,i,arr) => acc + age /arr.length,0)
// const avg =calcaverageHumanAge([5,2,4,1,15,8,3]);
// console.log(avg)

// console.log('------Jawad------')
// const julia = [3, 5, 2, 12, 7];
// const kate = [4, 1, 15, 8, 3];
// const checkDogss = function (arr1, arr2) {
//   const dogsJuliaCorrected = arr1.slice();
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2);

//   const concat = dogsJuliaCorrected.concat(arr2);
//   concat.forEach(function (age) {
//     const type = age > 3 ? 'Adult' : 'puppie';
//     console.log(`Dog is ${type} with age ${age}`);
//   });
// };
// checkDogss(julia, kate);

//---------- MAP ---------
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUsd = 1.1;
// const usd = movements.map(mov=>mov*eurToUsd);
// console.log(usd)
// const USD = movements.map(function(mov){
//   return mov*eurToUsd;
// });
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const withdrawal = movements.filter(function(mov){
//   return mov < 0;
// })
// console.log(withdrawal);
// console.log(movements)
// const username = user.toLowerCase().split(' ').map(function(name){
//   return name[0];
// }).join();
// console.log(username);












// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-07-26T17:01:17.194Z',
    '2022-11-18T23:36:17.929Z',
    '2022-11-22T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];



















// // /////////////////////////////////////////////////
// // /////////////////////////////////////////////////
// // // BANKIST APP

// Data
//  const account1 = {
//    owner: 'Jonas Schmedtmann',
//    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//    interestRate: 1.2, // %
//    pin: 1111,
// };

//  const account2 = {
//    owner: 'Jessica Davis',
//    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//    interestRate: 1.5,
//    pin: 2222,
//  };

//  const account3 = {
//    owner: 'Steven Thomas Williams',
//    movements: [200, -200, 340, -300, -20, 50, 400, -460],
//    interestRate: 0.7,
//    pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function(movements, sort = false) {
    containerMovements.innerHTML = '';

    const movs = sort ? movements.slice().sort((a,b) => a-b) : movements;

    movs.forEach(function(mov,i) {
        const type = mov > 0 ? 'deposit' : 'withdrawal';
        const html = `
        <div class="movements__row">
            <div class="movements__type movements__type--${type}">${
                i+1
            } ${type}</div>
        <div class="movements__value">${mov}€</div>
        </div>`;
        containerMovements.insertAdjacentHTML('afterbegin',html)
    });
};
//  

const calcDisplayBalance = function (acc){
  acc.balance = acc.movements.reduce((acc,mov)=>acc + mov,0);
  labelBalance.textContent = `${acc.balance} €`
};
// calcDisplayBalance (account1.movements);

const calcDisplaySummary = function(acc){
  const incomes = acc.movements.filter(mov=> mov>0)
  .reduce((acc,mov) => acc + mov);
  labelSumIn.textContent = `${incomes}€`;

  const out= acc.movements.
    filter(mov => mov < 0)
    .reduce((acc,mov)=> acc + mov);
    labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements.filter(mov => mov > 0)
  .map(deposit => (deposit * acc.interestRate) /100)
  .filter((int, i , arr) => {
    return int >= 1;
  })
  .reduce((acc,int) => acc + int,0);
  labelSumInterest.textContent = `${interest}€`;

};
// calcDisplaySummary(account1.movements)

const createUsernames = function(accs){
  accs.forEach(function(acc){
   acc.username =acc.owner
  .toLowerCase()
  .split(' ')
  .map(name =>name[0])
  .join('');
});
};
createUsernames(accounts);
console.log(accounts)
const updateUI = function(acc){
  //display movements
  displayMovements(acc.movements);
  // display balance
  calcDisplayBalance(acc);
  // display summary
  calcDisplaySummary(acc);
}

// Event Handler 
let currentAccount;
btnLogin.addEventListener('click', function(e){
  // Submitting Prevention
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username ===
  inputLoginUsername.value);
  // console.log(currentAccount);

  if(currentAccount?.pin === Number (inputLoginPin.value)){
    labelWelcome.textContent = `Well come back, ${currentAccount.owner.split(' ') [0]}`;
    containerApp.style.opacity = 100;
    // clear inpu fields 
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
  //   //display movements
  // displayMovements(currentAccount.movements);
  // // display balance
  // calcDisplayBalance(currentAccount);
  // // display summary
  // calcDisplaySummary(currentAccount);
    //updateUI

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function(e){
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc =>acc.username===inputTransferTo.value);
  console.log(amount,receiverAcc);
  // inputTransferAmount.value =inputTransferTo.value = '';

  if(amount > 0
    && receiverAcc  &&
    currentAccount.balance>= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    console.log('valid')
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(+amount);
    // update Ui
    updateUI(currentAccount);
  };
});

btnLoan.addEventListener('click', function(e){
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(
    mov => mov >= amount *0.1)){
      currentAccount.movements.push(amount);
      updateUI(currentAccount);
    }else{
      alert("you cannot get the loan")
    }
    inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function(e){
  e.preventDefault();
  // console.log('deleted');
  if(inputCloseUsername.value === currentAccount.
    username &&
    Number(inputClosePin.value) ===currentAccount.pin
  ){
    const index = accounts.findIndex(
    acc => acc.username=== currentAccount.username);
    console.log(index);
    //Delete account
    accounts.splice(index,1);
    containerApp.style.opacity = 0;
  }
  inputLoginUsername.value = inputLoginPin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function(e){
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

















// -----------Jawad's practice-----------

// // /////////////////////////////////////////////////
// // /////////////////////////////////////////////////
// // // LECTURES

//  const currencies = new Map([
//    ['USD', 'United States dollar'],
//  ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
//  ]);

// // const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // // /////////////////////////////////////////////////

// // // // //////////////////////video 1////
// // // ///1 slise
// // // let arr = ['a', 'b', 'c', 'd', 'e'];
// // // // console.log(arr.slice(2));
// // // // console.log(arr.slice(1, 3));

// // // //2 ///// splice ///
// // // ///mutate the original array //
// // // let arr2 = ['a', 'b', 'c', 'd', 'e'];
// // // const splc = arr2.splice(1, 3);
// // // // console.log(splc);
// // // // console.log(arr2);

// // // ///3// reverse //
// // // //also mutate the original array
// // // console.log(arr.reverse());
// // // console.log(arr);
// // // // concat ///
// // // const letters = arr.concat(arr2);
// // // console.log(letters);
// // // // or // by spread
// // // console.log([...arr, ...arr2]);

// // // // join
// // // console.log(letters.join('-'));

// // // // foreach on maps
// // // currencies.forEach(function (value, key, map) {
// // //   console.log(`${key} : ${value}`);
// // // });

// // // // foreEach on sets
// // // const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// // // console.log(currenciesUnique);
// // // currenciesUnique.forEach(function (value, _, map) {
// // //   console.log(`${value}: ${value}`);
// // // });
// // ///quiz start

// // ////////quiz end
// // const displayMovements = function (movements) {
// //   containerMovements.innerHTML = ' ';
// //   movements.forEach(function (mov, i) {
// //     const type = mov > 0 ? 'deposit' : 'withdrawal';
// //     const html = `
// //     <div class="movements__row">
// //           <div class="movements__type movements__type--${type}">${
// //       i + 1
// //     } ${type}"</div>
// //           <div class="movements__value">${mov}€</div>
// //         </div>`;

// //     containerMovements.insertAdjacentHTML('afterbegin', html);
// //   });
// // };
// // displayMovements(account1.movements);

// // const displayBalance = function (movements) {
// //   const balance = movements.reduce((acc, cur) => acc + cur, 0);
// //   labelBalance.textContent = `${balance}€`;
// // };
// // displayBalance(account1.movements);

// // const creatUserName = function (accs) {
// //   accs.forEach(function (acc) {
// //     accs.username = acc.owner
// //       .toLowerCase()
// //       .split(' ')
// //       .map(name => name[0])
// //       .join('');
// //   });
// // };
// // creatUserName(accounts);
// // const calcDisplaySummary = function (movements) {
// //   const income = movements
// //     .filter(mov => mov > 0)
// //     .reduce((acc, curr) => acc + curr, 0);
// //   labelSumIn.textContent = `${income}€`;
// //   const out = movements
// //     .filter(mov => mov < 0)
// //     .reduce((acc, mov) => acc + mov, 0);
// //   labelSumOut.textContent = `${Math.abs(out)}€`;
// //   const interest = movements
// //     .filter(mov => mov > 0)
// //     .map(deposit => (deposit * 1.2) / 100)
// //     .filter((int, i, arr) => int > 1)
// //     .reduce((acc, int) => acc + int);
// //   labelSumInterest.textContent = `${interest}€`;
// // };
// // calcDisplaySummary(account1.movements);
// // let currentAccount;
// // btnLogin.addEventListener('click', function (e) {
// //   e.preventDefault();
// //   currentAccount = accounts.find(
// //     acc => acc.username === inputLoginUsername.value
// //   );
// //   console.log(currentAccount);
// // });
// // find mathod
// // const profile = accounts.find(acc => acc.owner === 'Jessica Davis');
// // console.log(profile);
// // max values reduce
// // const max = movements.reduce(function (acc, mov) {
// //   if (acc > mov) return acc;
// //   else return mov;
// //   // acc > mov ?  acc : mov;
// // }, movements[0]);
// // console.log(max);
// // const urtoSD = 1.1;

// // map
// // const movementsUSD = movements.map(mov => mov * urtoSD);
// // console.log(movementsUSD);
// // console.log(movements);
// // for of
// // const movementusdfor = [];
// // for (const mov of movements) {
// //   movementusdfor.push(mov * urtoSD);
// // }
// // console.log(movementusdfor);
// // const user = 'Jawad Muhammd Ali';

// // const creatUserName = function (user) {
// //   const username = user
// //     .toLowerCase()
// //     .split(' ')
// //     .map(name => name[0])
// //     .join('');
// //   return username;
// // };
// // console.log(creatUserName('Usama abid'));

// // const depositsNN = movements.filter(function (mov) {
// //   return mov > 0;
// // });
// // console.log(depositsNN);
// // const withdrawalll = movements.filter(mov => mov < 0);
// // console.log(withdrawalll);

// // const addarray = movements.reduce((acc, curr, i, arr) => {
// //   console.log(`itiration ${i} : ${acc}`);
// //   return acc + curr;
// // }, 0);
// // console.log(addarray);

// // using arrow function

// // quiz2
// // const calcAvrAgesHuman = function (ages) {
// //   const humanAge = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
// //   console.log(humanAge);
// //   const nonAdults = humanAge.filter(age => age < 18);
// //   console.log(`NON Adults : ${nonAdults}`);
// //   const adults = humanAge.filter(age => age > 18);
// //   console.log(`Adults : ${adults}`);
// //   const avrg = adults.reduce((acc, age) => (acc + age, 0) / adults.length);

// //   // return avrg;
// //   console.log(`average : ${avrg}`);
// // };
// // const testdata1 = [5, 2, 4, 1, 15, 8, 3];
// // calcAvrAgesHuman(testdata1);

// 'use strict';

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // BANKIST APP

// /////////////////////////////////////////////////
// // Data
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
//   movementsDates: [
//     '2019-11-18T21:31:17.178Z',
//     '2019-12-23T07:42:02.383Z',
//     '2020-01-28T09:15:04.904Z',
//     '2020-04-01T10:17:24.185Z',
//     '2020-05-08T14:11:59.604Z',
//     '2020-07-26T17:01:17.194Z',
//     '2022-11-18T23:36:17.929Z',
//     '2022-11-22T10:51:36.790Z',
//   ],
//   currency: 'EUR',
//   locale: 'pt-PT', // de-DE
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
//   movementsDates: [
//     '2019-11-01T13:15:33.035Z',
//     '2019-11-30T09:48:16.867Z',
//     '2019-12-25T06:04:23.907Z',
//     '2020-01-25T14:18:46.235Z',
//     '2020-02-05T16:33:06.386Z',
//     '2020-04-10T14:43:26.374Z',
//     '2020-06-25T18:49:59.371Z',
//     '2020-07-26T12:01:20.894Z',
//   ],
//   currency: 'USD',
//   locale: 'en-US',
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// /////////////////////////////////////////////////
// // Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

// /////////////////////////////////////////////////
// // Functions

// const formatMovementDate = function (date, locale) {
//   const calcdaysPassed = (date1, date2) =>
//     Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

//   const daysPassed = calcdaysPassed(new Date(), date);
//   if (daysPassed === 0) return 'Today';
//   if (daysPassed === 1) return 'Yesterday';
//   if (daysPassed <= 7) return `${daysPassed} days ago`;
//   else {
//     // const day = `${date.getDate()}`.padStart(2, 0);
//     // const month = `${date.getMonth()}`.padStart(2, 0);
//     // const year = date.getFullYear();

//     return new Intl.DateTimeFormat(locale, date).format(date);
//   }
// };
// const formatCur = function (value, locale, currency) {
//   return new Intl.NumberFormat(locale, {
//     style: 'currency',
//     currency: currency,
//   }).format(value);
// };
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const dispplayMovements = function (acc, sort = false) {
//   containerMovements.innerHTML = '';
//   const movs = sort
//     ? acc.movements.slice().sort((a, b) => a - b)
//     : acc.movements;
//   movs.forEach(function (mov, i) {
//     const type = mov > 0 ? 'deposit' : 'withdrawal';
//     const date = new Date(acc.movementsDates[i]);

//     const displayDate = formatMovementDate(date, acc.locale);
//     const formatedMov = formatCur(mov, acc.locale, acc.currency);
//     const HTML = `<div class="movements">
//         <div class="movements__row">
//           <div class="movements__type movements__type--${type}">${
//       i + 1
//     } ${type}</div>
//     <div class="movements__date">${displayDate}</div>
//           <div class="movements__value">${formatedMov}</div>
//         </div>`;
//     containerMovements.insertAdjacentHTML('afterbegin', HTML);
//   });
// };
// const calcDisplayBalance = function (acc) {
//   acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);

//   labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
// };
// const calcDisplaySummary = function (acc) {
//   const incomes = acc.movements
//     .filter(mov => mov > 0)
//     .reduce((acc, cur) => acc + cur, 0);
//   labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

//   const out = acc.movements
//     .filter(mov => mov < 0)
//     .reduce((acc, mov) => acc + mov, 0);
//   labelSumOut.textContent = formatCur(out, acc.locale, acc.currency);
//   const interest = acc.movements
//     .filter(mov => mov > 0)
//     .map(deposit => (deposit * acc.interestRate) / 100)
//     .filter(cur => cur >= 1)
//     .reduce((acc, cur) => acc + cur, 0);
//   labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
// };

// const Creatusername = function (accs) {
//   accs.forEach(function (acc) {
//     acc.username = acc.owner
//       .toLowerCase()
//       .split(' ')
//       .map(name => name[0])
//       .join('');
//   });
// };

// Creatusername(accounts);
// console.log(accounts);
// const updateUI = function (acc) {
//   dispplayMovements(acc);
//   // dispaay balance
//   calcDisplayBalance(acc);
//   // display summary
//   calcDisplaySummary(acc);
// };
// const startLogoutTimer = function () {
//   const tick = function () {
//     const min = String(Math.trunc(time / 60)).padStart(2, 0);
//     const sec = String(time % 60).padStart(2, 0);
//     // to each calll print the remaining time to UI
//     labelTimer.textContent = `${min}:${sec}`;
//     // decrees 1s
//     if (time === 0) {
//       clearInterval(timer);
//       labelWelcome.textContent = 'Log in to get started';
//       containerApp.style.opacity = 0;
//     }
//     time--;
//   };
//   let time = 120;
//   // call the timer every second
//   tick();
//   const timer = setInterval(tick, 1000);
//   return timer;
// };
// // event handler
// let currentAccount, timer;
// // fake always logged in
// // currentAccount = account1;
// // updateUI(currentAccount);
// // containerApp.style.opacity = 100;

// btnLogin.addEventListener('click', function (e) {
//   e.preventDefault();
//   currentAccount = accounts.find(
//     acc => acc.username === inputLoginUsername.value
//   );
//   console.log(currentAccount);
//   if (currentAccount?.pin === Number(inputLoginPin.value)) {
//     // display UI and message
//     labelWelcome.textContent = `welcome ${currentAccount.owner.split(' ')[0]}`;
//     containerApp.style.opacity = 100;
//     // creat date and time
//     const now = new Date();
//     const options = {
//       hour: 'numeric',
//       minute: 'numeric',
//       day: 'numeric',
//       month: 'numeric',
//       year: 'numeric',
//     };

//     labelDate.textContent = new Intl.DateTimeFormat(
//       currentAccount.locale,
//       options
//     ).format(now);
//     // clear the input field
//     inputLoginUsername.value = inputLoginPin.value = '';
//     inputLoginPin.blur();
//     if (timer) clearInterval(timer);
//     timer = startLogoutTimer();
//     // display movements
//     updateUI(currentAccount);
//   }
// });
// btnTransfer.addEventListener('click', function (e) {
//   e.preventDefault();
//   const amount = Number(inputTransferAmount.value);
//   const receiverAcc = accounts.find(
//     acc => acc.username === inputTransferTo.value
//   );
//   // console.log(amount, receiverAcc);
//   inputTransferAmount.value = inputTransferTo.value = '';

//   if (
//     amount > 0 &&
//     receiverAcc &&
//     currentAccount.balance >= amount &&
//     receiverAcc.username !== currentAccount.username
//   ) {
//     // doing the transfer
//     currentAccount.movements.push(-amount);
//     receiverAcc.movements.push(amount);
//     // add transfer date
//     currentAccount.movementsDates.push(new Date().toISOString());
//     receiverAcc.movementsDates.push(new Date().toISOString());
//     updateUI(currentAccount);
//     clearInterval(timer);
//     timer = startLogoutTimer();
//   }
// });
// btnLoan.addEventListener('click', function (e) {
//   e.preventDefault();
//   const amount = Math.ceil(inputLoanAmount.value);
//   if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
//     setTimeout(function () {
//       currentAccount.movements.push(amount);
//       currentAccount.movementsDates.push(new Date().toISOString());
//       updateUI(currentAccount);
//       // reset timer
//       clearInterval(timer);
//       timer = startLogoutTimer();
//     }, 2500);
//   }
//   inputLoanAmount.value = '';
// });
// btnClose.addEventListener('click', function (e) {
//   e.preventDefault();
//   // console.log('delete');
//   if (
//     inputCloseUsername.value === currentAccount.username &&
//     Number(inputClosePin.value) === currentAccount.pin
//   ) {
//     const index = accounts.findIndex(
//       acc => acc.username === currentAccount.username
//     );
//     accounts.splice(index, 1);
//     containerApp.style.opacity = 0;
//   }
//   inputCloseUsername.value = inputClosePin = '';
// });
// let sorted = false;
// btnSort.addEventListener('click', function (e) {
//   e.preventDefault();
//   dispplayMovements(acc.movements, !sorted);
//   sorted = !sorted;
// });

// // const displayMovements = function (movements, sort = false) {
// //   containerMovements.innerHTML = '';

// //   const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

// //   movs.forEach(function (mov, i) {
// //     const type = mov > 0 ? 'deposit' : 'withdrawal';

// //     const html = `
// //       <div class="movements__row">
// //         <div class="movements__type movements__type--${type}">${
// //       i + 1
// //     } ${type}</div>
// //         <div class="movements__value">${mov}€</div>
// //       </div>
// //     `;

// //     containerMovements.insertAdjacentHTML('afterbegin', html);
// //   });
// // };

// // const calcDisplayBalance = function (acc) {
// //   acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
// //   labelBalance.textContent = `${acc.balance}€`;
// // };

// // const calcDisplaySummary = function (acc) {
// //   const incomes = acc.movements
// //     .filter(mov => mov > 0)
// //     .reduce((acc, mov) => acc + mov, 0);
// //   labelSumIn.textContent = `${incomes}€`;

// //   const out = acc.movements
// //     .filter(mov => mov < 0)
// //     .reduce((acc, mov) => acc + mov, 0);
// //   labelSumOut.textContent = `${Math.abs(out)}€`;

// //   const interest = acc.movements
// //     .filter(mov => mov > 0)
// //     .map(deposit => (deposit * acc.interestRate) / 100)
// //     .filter((int, i, arr) => {
// //       // console.log(arr);
// //       return int >= 1;
// //     })
// //     .reduce((acc, int) => acc + int, 0);
// //   labelSumInterest.textContent = `${interest}€`;
// // };

// // const createUsernames = function (accs) {
// //   accs.forEach(function (acc) {
// //     acc.username = acc.owner
// //       .toLowerCase()
// //       .split(' ')
// //       .map(name => name[0])
// //       .join('');
// //   });
// // };
// // createUsernames(accounts);

// // const updateUI = function (acc) {
// //   // Display movements
// //   displayMovements(acc.movements);

// //   // Display balance
// //   calcDisplayBalance(acc);

// //   // Display summary
// //   calcDisplaySummary(acc);
// // };

// // ///////////////////////////////////////
// // // Event handlers
// // let currentAccount;

// // btnLogin.addEventListener('click', function (e) {
// //   // Prevent form from submitting
// //   e.preventDefault();

// //   currentAccount = accounts.find(
// //     acc => acc.username === inputLoginUsername.value
// //   );
// //   console.log(currentAccount);

// //   if (currentAccount?.pin === Number(inputLoginPin.value)) {
// //     // Display UI and message
// //     labelWelcome.textContent = `Welcome back, ${
// //       currentAccount.owner.split(' ')[0]
// //     }`;
// //     containerApp.style.opacity = 100;

// //     // Clear input fields
// //     inputLoginUsername.value = inputLoginPin.value = '';
// //     inputLoginPin.blur();

// //     // Update UI
// //     updateUI(currentAccount);
// //   }
// // });

// // ----------------------------------- Lectures ---------------

// // let arr = ['a', 'b', 'c', 'd', 'e'];
// // // slice
// // // does not mutate the original array
// // console.log(arr);
// // console.log(arr.slice(2));
// // console.log(arr.slice(1, 3));
// // console.log(arr.slice(-1));
// // console.log(arr.slice());
// // // copy of array
// // const newarr = arr.slice();
// // console.log(newarr);
// // // splice
// // // mutate the original array
// // // console.log(arr.splice(0, 2));
// // // console.log(arr);

// // // reverse
// // //the array also mutate the orginal array
// // console.log(arr.reverse());
// // console.log(arr);
// // console.log(arr.reverse());

// // // concate
// // // concate two arrays but not mutate the original arrays
// // let arr2 = ['f', 'g', 'h', 'i', 'j', 'k'];
// // const concatearray = arr.concat(arr2);
// // console.log(concatearray);
// // console.log(arr);
// // // join
// // // does not mutate the original one
// // console.log(arr.join('-'));
// // console.log(arr);

// // // at
// // const arr1 = [23, 11, 64];
// // console.log(arr1.at(1));
// // console.log(arr1.at(-1));

// // // for each loop
// // const movements = [200, 450, -400, 3000, -650, 130, 70, 1300];
// // for (const [index, movement] of movements.entries()) {
// //   if (movement > 0) {
// //     console.log(`Movement ${index + 1}: you deposit ${movement}`);
// //   } else {
// //     console.log(`Movement ${index + 1}: you withdraw ${Math.abs(movement)}`);
// //   }
// // }

// // // same task for for each
// // // here sequence of aurguments is
// // // 1. current value , 2.current index ,3. entire array
// // //
// // console.log(`-------for each ----`);
// // movements.forEach(function (movement, index, arr) {
// //   if (movement > 0) {
// //     console.log(`Movement ${index + 1}: you deposit ${movement}`);
// //   } else {
// //     console.log(`Movement ${index + 1}: you withdraw ${Math.abs(movement)}`);
// //   }
// // });
// // codding challenge 1
// const julia = [3, 5, 2, 12, 7];
// const kate = [4, 1, 15, 8, 3];
// const checkDogs = function (arr1, arr2) {
//   const dogsJuliaCorrected = arr1.slice();
//   dogsJuliaCorrected.splice(0, 2);
//   dogsJuliaCorrected.splice(-2);

//   const concat = dogsJuliaCorrected.concat(arr2);
//   concat.forEach(function (age) {
//     const type = age > 3 ? 'Adult' : 'puppie';
//     console.log(`Dog is ${type} with age ${age}`);
//   });
// };
// checkDogs(julia, kate);

// // const eurotoUSD = 1.1;
// // const movements = [200, 450, -400, 3000, -650, 130, 70, 1300];
// // const newmap = movements.map(function (moe) {
// //   return moe * eurotoUSD;
// // });
// // console.log(movements);
// // console.log(newmap);

// // arrow function
// // const newmap = movements.map(moe => eurotoUSD * moe);
// // console.log(newmap);
// // const movementdescription = movements.map(
// //   (mov, i) =>
// //     `Mocement ${i + 1}: you ${mov > 0 ? 'deposit' : 'withdrawal'} ${Math.abs(
// //       mov
// //     )}`
// // );
// // console.log(movementdescription);
// // filter
// // const Deposit = movements.filter(mov => mov > 0);
// // const withdrawal = movements.filter(mov => mov < 0);
// // console.log(withdrawal);
// // // reduce
// // const balance = movements.reduce((acc, cur) => acc + cur, 0);
// // console.log(movements);
// // console.log(balance);
// // maximum by reduce mathod
// // const maximum = movements.reduce(function (acc, mov) {
// //   if (acc > mov) return acc;
// //   else return mov;
// // }, movements[0]);
// // console.log(movements);
// // console.log(maximum);
// const calcaverageHumanAge = function (date) {
//   const humanAge = date.map(function (curr, i) {
//     if (curr <= 2) return 2 * curr;
//     else return 16 + curr * 4;
//   });
//   return humanAge;
// };
// const humanage = calcaverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// console.log(humanage);
// // 2
// const adult = humanage.filter(curr => curr > 18);
// console.log(adult);
// const averageadult = adult.reduce(function (acc, cur) {
//   return (acc + cur) / adult.length;
// });
// console.log(averageadult);

// // find mathod
// const findFirstWIth = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(findFirstWIth);
// const account = accounts.find(acc => acc.owner === 'Steven Thomas Williams');
// console.log(account);

// // some mathod
// const anydeposit = movements.some(mov => mov > 1300);
// //  return true if any element satisfy the condition
// // same as include but the difference is equality and condition

// // every mathod
// // return true only if every mathod satisfy the condition
// // sorting array
// console.log(movements);
// // movements.sort((a, b) => {
// //   if (a > b) return 1;
// //   if (a < b) return -1;
// // });

// //  by simple math
// movements.sort((a, b) => a - b);
// console.log(movements);

// // movements.sort((a, b) => {
// //   if (a > b) return -1;
// //   if (a < b) return 1;
// // });
// movements.sort((a, b) => b - a);
// console.log(movements);

// // array from
// // const y = Array.from({ length: 100 }, (_, i) => i + 1);
// // console.log(y);

// // Number section
// // console.log(Number('23'));
// // console.log(+'23');
// // console.log(Number.parseInt('30ox'));
// // console.log(Number.parseInt('c30ox'));
// // console.log(Number.parseFloat('2.5rem'));
// console.log(Number.isNaN(20));
// console.log(Number.isNaN('20'));
// console.log(Number.isNaN(+'20x'));
// // random number between two numbers
// const randomint = (min, max) =>
//   Math.trunc(Math.random() * (max - min) + 1) + min;
// console.log(randomint(10, 20));
// //
// console.log(Math.round(23.3));
// console.log(Math.ceil(23.3));
// console.log(Math.floor(23.3));
// //
// console.log(+(23.5632).toFixed(1));

// // labelBalance.addEventListener('click', function () {
// //   [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
// //     if (i % 2 === 0) row.style.backgroundColor = 'orange';
// //     if (i % 3 === 0) row.style.backgroundColor = 'blue';
// //   });
// // });

// // dates
// // const now = new Date();
// // console.log(now);
// // console.log(new Date('11 22 2022 13:50:40'));
// // console.log(new Date(account1.movementsDates[0]));
// // console.log(new Date(2022, 10, 22, 13, 55));

// // const calcdaysPassed = (date1, date2) =>
// //   Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
// // const dayspp = calcdaysPassed(new Date(2022, 8, 23), new Date(2022, 8, 30));
// // console.log(dayspp);
// // number formating internationalizatoin
// // const num = 38884562.23;

// // const optionsN = {
// //   style: 'currency',
// //   currency: 'USD',
// // };
// // console.log('PL: ', new Intl.NumberFormat('ur-PK', optionsN).format(num));
// // set timeout function
// const ingredients = ['tikka boti', 'lazagnia'];
// const pizzatimeout = setTimeout(
//   (ing1, ing2) => console.log(`here is your pizza with ${ing1} and ${ing2}`),
//   3000,
//   ...ingredients
// );
// console.log('waitings');
// if (ingredients.includes('tikka boti')) clearTimeout(pizzatimeout);
