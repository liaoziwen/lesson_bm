const ages = [32,15,19,12];
// const nums = [];
// ages.filter(function(num){
//     if(num>=18){
//         nums.push(num);
//     }
// })
// console.log(nums);
// 命名
const adultArr = ages.filter(age => age >= 18);
// 出席? 是否有? 
const adultPresent = ages.some(age => age >= 18);
// console.log(adultPresent);
// 所有人满足需求
const allOldEnough = ages.every(age => age >= 18);
console.log(allOldEnough);