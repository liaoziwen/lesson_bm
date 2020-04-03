// let a = 2;    全局
// var twoSum;     //变量申明   它的类型是什么？
// console.log(typeof twoSum);  //undefined
// 时间复杂度 O(n^2)
// var twoSum = function (nums, target) {
//     let arr = [];  //把下标放进去
//     for (let i = 0; i<nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//         if(nums[i]+ nums[j] === target){
//             arr = [i,j];                        //暴力解法
//             return arr;
//         }    
//         }
//     }
//     // a = 3
//     // console.log(a);
//     //console.log(typeof twoSum);
// }
const twoSum = function(nums,target){
    //两重循环变成一重循环
    let map = {};       //对象自变量
    nums.forEach(function(e,i){                         //遍历下标
    map[e] = i;                                         //作用是查找下标
    })
    //console.log(map);
    for(let i = 0; i< nums.length;i++){
        let j = map[target - nums[i]];
        if( j && j !== i) {
            return [i,j];
        }
    }
};
// console.log(twoSum([2,7,11,15]));
// 时间复杂度为O(n)     n + n = 2n