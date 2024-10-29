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

var isPowerOfTwo = function(n) {
    while(n%2==0){
        n/=2
    }
    return n===1
    
};
console.log(isPowerOfTwo(2));

