class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let seenCount = {};

        for(const num of nums){
            seenCount[num] = (seenCount[num] || 0 ) + 1;
            if (seenCount[num] >= 2) {
                return true
            } 
        }   

        return false
    }
}
