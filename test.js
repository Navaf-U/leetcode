// var singleNumber = function(nums) {
//     let result = nums.sort((a,b)=>a-b)
//   let finalRes = []
//   for(let i=0;i<result.length;i++){
//       if(result [i] !== result [i+1] ){
//        if(result[i] !== result[i-1])
//            finalRes.push(result[i])
//       }else{
//           i++
//       }
//   }   
//   return finalRes
// };

// var myPow = function(x, n){
//     return Math.pow(x,n)
    
// };
// let x = 2.00000
// let n = 10
// console.log(myPow(x,n));

// var isPowerOfTwo = function(n) {
//     while(n%2==0){
//         n/=2
//     }
//     return n===1
    
// };
// console.log(isPowerOfTwo(2));

// var isPowerOfThree = function(n) {
//     while(n%3==0){
//         n/=3
//     }
//     return n===1
    
// };
// console.log(isPowerOfTwo(2));


// var isPowerOfFour = function(n) {
//     while(n%4==0){
//         n/=4
//     }
//     return n===1
    
// };
// console.log(isPowerOfFour(2));



var singleNonDuplicate = function(nums) {
    let res=[]
    for(let i=0;i<nums.length;i++){
        if(nums[i] !== nums[i+1] && nums[i] !== nums[i-1] ){
            res.push(nums[i])
          
        }
    }
    return Number(res)
};

nums = [1,1,2,3,3,4,4,8,8]
console.log(singleNonDuplicate(nums));
