/*Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.*/

function maxSumArray(nums){
    let max = nums[0];
    let sum = 0
    nums.map((num) => {
    if (num >= num + sum){
        sum = num
    } else {
        sum = num + sum        
    }
    if(sum > max){
        max = sum
    }
   })
    return max
}

function subArrays(arr){
    return arr.reduce((arrays,v,i,a) => {
        arrays.push(a.slice(i))
        a.map((_,j) => arrays.push(a.slice(i,j)))
        return arrays
    },[]).filter(v => v.length)
}

module.exports = {
    subArrays,
    maxSumArray
}