// function filterOutOdds() {
//   var nums = Array.prototype.slice.call(arguments);
//   return nums.filter(function (num) {
//     return num % 2 === 0;
//   });
// }

const filterOutOdds = (...arguments) => arguments.filter((num) => num % 2 === 0);



// findMin(1,4,12,-3) // -3
// findMin(1,-1) // -1
// findMin(3,1) // 1

const findMin = (...arguments) => Math.min(...arguments)


// mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

const mergeObjects = (x,y) => ({...x, ...y});

// doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
// doubleAndReturnArgs([2],10,4) // [2, 20, 8]

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(num => num *2)]


// function removeRandom(items) {

// }

const removeRandom = items => {
    const index = Math.floor(Math.random() * items.length);
    return [...items.slice(0, index), ...items.slice(index + 1)];
  }


//   function extend(array1, array2) {

// }

const extend = (array1, array2) => {
    return [...array1, ...array2];
}


// function addKeyVal(obj, key, val) {

// }

const addKeyVal = (obj, key, val) => {
const newObj = { ...obj}
newObj[key] = val;
return newObj;
}

// function removeKey(obj, key) {

// }

const removeKey = (obj, key, val) => {
    const newObj = {...obj}
    delete newObj[key] = val;
    return newObj;
}

    // function combine(obj1, obj2) {

    // }


const combine = (obj1, obj2) => {
return {...obj1, ...obj2}
}

// function update(obj, key, val) {

// }

const update = (obj, key, val) => {
const newObj = {...obj}
newObj[key] = val;
return newObj;
}

