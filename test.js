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

// var convertTemperature = function(celsius) {
//     const Kelvin =celsius + 273.15
//     const Fahrenheit =celsius * 1.80 + 32.00
//     return [Kelvin,Fahrenheit]
// };

// var largestNumber = function(nums) {
//     const owns = nums.map((item)=>{
//          return item.toString()
//      })
//      const test = owns.sort((a, b) => (b + a).localeCompare(a + b));   
//      const final = test.reduce((acc,curr)=>acc+curr.toString())
//      if(final == 0){
//          return "0"
//      }
//     return final
//  };


// var rotateString = function(s, goal) {
//     if(s.length !== goal.length){
//         return false
//     }
//     const result= s+s
//     return result.includes(goal)
    
// };
// console.log(rotateString("abcde","cdeab"));

// console.log(rotateString("abcde","abced"));


// var arrayRankTransform = function(arr) {
//     let ranks = [];
//     let sortarr = [...new Set(arr)]
//     sortarr.sort((a, b) => a - b);
//     sortarr.forEach((num, index) => {
//      ranks[num]=index+1;
//  });
//      return arr.map(num => ranks[num]);
// };
// console.log(arrayRankTransform([37,12,28,9,100,56,80,5,12]));

// var compressedString = function(word) {
//     let final = "" 
//     for(let j = 0;j<word.length;j++){
//         let count = 1;
//         for(let i = j+1 ; i < word.length && word[i]===word[j] && count < 9 ;i++){
//             count++
//             j=i
//         }
//         final += count +word[j]
//     }
//     return final
    
// };

var minimumOperations = function(nums) {
    let result = 0    
   for(let i=0;i<nums.length;i++){
        if(nums[i] % 3 !== 0  ){
            result++
        }
    }
        return result
};

console.log(minimumOperations([1,2,3,4]));
console.log(minimumOperations([3,6,9]));