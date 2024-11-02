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



// var singleNonDuplicate = function(nums) {
//     let res=[]
//     for(let i=0;i<nums.length;i++){
//         if(nums[i] !== nums[i+1] && nums[i] !== nums[i-1] ){
//             res.push(nums[i])
          
//         }
//     }
//     return Number(res)
// };

// nums = [1,1,2,3,3,4,4,8,8]
// console.log(singleNonDuplicate(nums));


// var makeFancyString = function(s) {
//     let res =""
//     for(let i=0;i<s.length;i++){
//         if(s[i]==s[i+1] && s[i]==s[i+2]){
//         continue
//         }else{
//             res += s[i]
//         }

//     }
//     return res
// };

// console.log(makeFancyString('aaabaaaa'));
// console.log(makeFancyString("leeetcode"));
// console.log(makeFancyString('aab'));


// var isCircularSentence = function(sentence) {
//     let res=""
//     var result=false
//     for(let i=0;i<sentence.length;i++){
//         res = sentence.charAt(i)
//         if( res === " " ){
//             if(sentence.charAt(i-1) !== sentence.charAt(i+1)){
//                 return result 
//             }
//         }
//     }
//     if(res === sentence.charAt(0)){
//         result = true
//     }else{
//         result = false
//     }
//     return result
// };

// console.log(isCircularSentence("MuFoevIXCZzrpXeRmTs ll sM"));
// console.log(isCircularSentence("leetcode exercises sound delightful"));

var convertTemperature = function(celsius) {
    const Kelvin =celsius + 273.15
    const Fahrenheit =celsius * 1.80 + 32.00
    return [Kelvin,Fahrenheit]
};