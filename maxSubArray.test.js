const assert = require('assert');
const { subArrays } = require('./maxSubArray')

describe('maxSumArray', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal([1, 2, 3].indexOf(4), -1);
//     });
//   });
    describe('#subArrays', function(){

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
});