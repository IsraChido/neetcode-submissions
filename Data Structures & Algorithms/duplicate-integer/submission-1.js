class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let numMap = new Map();

        for(const num of nums){
            numMap[num] = (numMap[num] || 0 ) + 1;
            if (numMap[num] >= 2) {
                return true
            } 
        }

        return false
    }
}
