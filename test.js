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

// var minimumOperations = function(nums) {
//     let result = 0    
//    for(let i=0;i<nums.length;i++){
//         if(nums[i] % 3 !== 0  ){
//             result++
//         }
//     }
//         return result
// };

// console.log(minimumOperations([1,2,3,4]));
// console.log(minimumOperations([3,6,9]));


// var differenceOfSums = function(n, m) {
//     let divisibleYes = []
//     let divisibleNo = []
//     let nums1 = null
//     let nums2 = null
    
//     for(let i=1;i<=n;i++){
//         if( i % m === 0){
//                 divisibleYes.push(i)

                
//             }else{
//                 divisibleNo.push(i)
                
//             }
//     }
    
//     nums1 = divisibleYes.reduce((acc,curr)=>acc+curr,0)
//     nums2 = divisibleNo.reduce((acc,curr)=>acc+curr,0)
//     return nums2-nums1
// };

// console.log(differenceOfSums(10,3));

// var sortArrayByParity = function(nums) {
//     let result=[]
//     const set1=nums.filter(i=> i%2 == 0)
//     const set2=nums.filter(i=> i%2 !== 0)
//     for(let i=0;i<set1.length;i++){
//         for(let j=0;j<set2.length-1;j++){
//             result.push(set1[i],set2[i])
//         }
//     }
//     return result
// };

// console.log(sortArrayByParity([1,2,4,5,2,1]));


// var sortArrayByParityII = function(nums) {
//     let result=[]
//     const set1=nums.filter(i=> i%2 == 0)
//     const set2=nums.filter(i=> i%2 !== 0)

//     for(let i=0;i<set1.length;i++){
//            if(set1.length >= 1 && set2.length>=1){
//              result.push(set1[i],set2[i])
//            }
//     }
//     return result

// };
// console.log(sortArrayByParityII([4,2,5,7]))

// var reverseWords = function(s) {
//     let result =""
//     let final = ""
//     for (let i = s.length; i >= 0 ; i--) {
//         result += s.charAt(i)
//    }
//    final = result.split(" ").reverse().join(" ")

//    return final
// };



// const s = "Let's take LeetCode contest"

// // "s'teL ekat edoCteeL tsetnoc"

// const s1 = "Mr Ding"
// console.log(reverseWords(s))
// console.log(reverseWords(s1))

// var addSpaces = function(s,spaces) {
//     let res = "" 
//     let sc = 0 
//     for(let i=0;i<s.length;i++){
//         if(sc < spaces.length && i === spaces[sc]){
//             res += ' '
//             sc++
//         }
//         res += s[i]
//     }
//     return res
//   };

// //   let s = "LeetcodeHelpsMeLearn" 
// //   let spaces = [8,13,15]
//   let s1 ="icodeinpython"
//   let spaces1 = [1,5,7,9]
// // console.log(addSpaces(s,spaces));
// console.log(addSpaces(s1,spaces1))

// var mergeAlternately = function(word1, word2) {
//     const l = word1.length > word2.length ? word1.length : word2.length
//     let output= ""
//     for(let i = 0 ; i< l;i++ ){
//         if(word1[i]){
//             output += word1[i] 
//         }
//         if(word2[i]){
//             output += word2[i]
//         }
//     }

//     return output
// };


// var capitalizeTitle = function(title) {
//     let loss = title.toLowerCase()
//     let output = ""
    
//     for(let i = 0 ; i<loss.length;i++){
//         if(loss[i] == " " && loss[i]){
//             output +=" "+ loss[i+1].toUpperCase()
//         }else if (loss[i-1] !== " "){
//             output += loss[i]
//         }
//     }
    
//     let o = output[0].toUpperCase() + output.slice(1) 
//     return o
    
// };

// let title = "capiTalIze tHe of titLe"
// console.log(capitalizeTitle(title))

// var capitalizeTitle = function(title) {
//     let loss = title.toLowerCase()
//     let splitted = loss.split(" ")
//     result = ""
//     for(let i = 0 ; i<splitted.length ; i++){
//         console.log(splitted[i])
//         if(splitted[i].length !== 2 && splitted[i].length !== 1 ){
//            result += splitted[i][0].toUpperCase() + splitted[i].slice(1) + " " 
//         }
//         else if(splitted[i].length <= 2){
//             result += splitted[i].toLowerCase() + " "
//         }
//     }

//     return result.trim()
// };

// let title = "capiTalIze tHe of titLe"
// let title1 = "i Love Leetcode"
// console.log(capitalizeTitle(title1))


// var detectCapitalUse = function(word) {
//     let wordCap = word.toUpperCase()
//     let wordSma = word.toLowerCase()
//     let firstCap = word[0].toUpperCase() + word.slice(1).toLowerCase();
//     if(word === wordCap || word === wordSma || word === firstCap){
//         return true
//     }else{
//         return false
//     }
// };

// var removeOccurrences = function(s, part) {
//     while (s.includes(part)) {
//         s = s.replace(part, "");
//     }
//     return s;
// };


// var sortPeople = function (names, heights) {
//     let arr = []
//     let res =[]
//     for (let i = 0; i < names.length; i++) {
//         arr.push({name:names[i],height:heights[i]})
//     }
//     arr.sort((a,b)=>b.height - a.height)
//     for (let i = 0; i < arr.length; i++) {
//         res.push(arr[i].name);
//     }
//     return res;
// };

// let names = ["IEO","Sgizfdfrims","QTASHKQ","Vk","RPJOFYZUBFSIYp","EPCFFt","VOYGWWNCf","WSpmqvb"]
//  let heights = [17233,32521,14087,42738,46669,65662,43204,8224]
// //["EPCFFt","RPJOFYZUBFSIYp","VOYGWWNCf","Vk","Sgizfdfrims","IEO","QTASHKQ","WSpmqvb"]
// console.log(sortPeople(names,heights))

// var sortVowels = function (s) {
//     let vowels = "AEIOUaeiou"
//     let index = 0
//     let sortString = s.split("").filter((i) => vowels.includes(i)).sort().join("")
//     let str = ""
//     for (let i = 0; i < s.length; i++) {
//         if (vowels.includes(s[i])) {
//             str += sortString[index]
//             index++
//         } else {
//             str += s[i]
//         }
//     }

//     return str
// };

// var removeElement = function(nums, val) {
//     let result = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== val) {
//             nums[result++] = nums[i];
//         }
//     }
//     return result;
// };

// const nums = [3,2,2,3]
// const val = 3

// removeElement(nums,val)

// var findDifference = function(nums1, nums2){
//     let final1 = [...new Set(nums1)];
//     let final2 = [...new Set(nums2)]
//     let result =[]
//     let arr1 =[]
//     let arr2 =[]
//     for(let i=0;i<final1.length;i++){
//         if(!final2.includes(final1[i])){
//             arr1.push(final1[i])
//         }
//     }
//     for(let j=0;j<final2.length;j++){
//         if(!final1.includes(final2[j])){
//             arr2.push(final2[j])
//         }
//     }
//     result.push(arr1)
//     result.push(arr2)
//     return result
// };

// var plusOne = function(digits) {
//     let str = digits.join("");
//     let num = BigInt(str) + BigInt(1);
//     return num.toString().split("").map((i)=>Number(i));
// };

// var cancellable = function(fn, args, t) {
//     let timeout;
//     const cancelFn =() =>{
//         clearTimeout(timeout)
//     }
//     timeout = setTimeout (()=>{
//         fn(...args)
//     },t)
//     return cancelFn
// };

var debounce = function (fn, t) {
    let timeout = null;
    return function (...args) {
        if (timeout !== null) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            fn(...args);
        }, t);
    }
};
