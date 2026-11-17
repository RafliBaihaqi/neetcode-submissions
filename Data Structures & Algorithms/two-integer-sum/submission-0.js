class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // create map
        const prevMap = new Map()
        // iterate on nums
        for(let i = 0; i < nums.length; i++){
            // check for the diff
            const diff = target - nums[i]
            // if diff exist in map return the i of the diff and the current one
            if(prevMap.has(diff)){
                return [prevMap.get(diff), i]
            }
            // if not then set the current position to map
            prevMap.set(nums[i], i)
        }
        return []
    }
}
