class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let len = numbers.length
        let left = 0, right = len - 1
        
        while(left < right){
            let res = numbers[left] + numbers[right]
            if(res === target){
                return [left + 1, right + 1]
            } else if (res > target){
                right--
            } else {
                left++
            }
        }
        return
    }
}
