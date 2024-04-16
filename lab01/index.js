const _ = require ('lodash');

let isArray = _.isArray([1, 2, 3]);
console.log('isArray: '+ isArray);

let maxValue = _.max([1412,123,823,1,12]);
console.log(`maxValue: ` + maxValue);

let maxNumber = _.max([1, 2, 5, 3, 4]);
console.log('maxNumber:', maxNumber);

let joinedString = _.join(['Hello', 'world'], ', ');
console.log('joinedString:', joinedString);

const isObject = _.isObject({ aasd: 1231, bwwq: 211123 });
console.log('isObject:', isObject);

