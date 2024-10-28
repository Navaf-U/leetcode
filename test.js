var singleNumber = function(nums) {
    let result = nums.sort((a,b)=>a-b)
  let finalRes = []
  for(let i=0;i<result.length;i++){
      if(result [i] !== result [i+1] ){
       if(result[i] !== result[i-1])
           finalRes.push(result[i])
      }else{
          i++
      }
  }   
  return finalRes
};