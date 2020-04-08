const assert = require('assert');
const { subArrays } = require('./maxSubArray')

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
            
        })

        it('returns the highest possible sum for a contigous subarray.', function(){

        })
    })


});