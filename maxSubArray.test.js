const assert = require('assert');
const { subArrays, maxSumArray } = require('./maxSubArray')

describe('maxSumArray', function() {

    describe.skip('#subArrays', function(){
        it('returns an Array', function() {
            assert.equal(Array.isArray(subArrays([1,2,-1])), true)
        })

        it('should return an array of subarrays', function(){
            assert.equal(subArrays([1,2,-1]).length, 6)
            assert.equal(subArrays([1,2]).length, 3)
            assert.equal(subArrays([1,2,3,4]).length, 10)
        })

        it('The elements of #subArrays should be arrays', function(){
            assert.equal(Array.isArray(subArrays([1,2,-1])[0]), true)
        })
    })

    describe('#maxSumArray', function(){
        
        it('returns an integer', function(){
            assert.equal(Number.isInteger(maxSumArray([-2,1,-3,4,-1,2,1,-5,4])), true)  
        })

        it('returns the highest possible sum for a contigous subarray.', function(){
            assert.equal(maxSumArray([1,2,-1]), 3)
            assert.equal(maxSumArray([1]), 1)
            assert.equal(maxSumArray([1,2]), 3)
            assert.equal(maxSumArray([1,2,3,4]), 10)
            assert.equal(maxSumArray([-1,-2,-1,-4,-6]), -1)
            assert.equal(maxSumArray([-2,1,-3,4,-1,2,1,-5,4]), 6)
        })
    })


});