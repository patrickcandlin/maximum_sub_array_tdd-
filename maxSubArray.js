/*Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.*/


function subArrays(arr){
    let arrays = []
    for(let i = 0; i < arr.length; i++){
        arrays.push(arr.slice(i))
        for(let j = i; j < arr.length; j++){
            arrays.push(arr.slice(i,j))
        }
    }
    arrays = arrays.filter(v => v.length)
    return arrays
}

module.exports = {
    subArrays
}