class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let split = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        let left = 0, right = split.length - 1

        while (left < right){
            if(split[left] === split[right]){
                left++
                right--
            } else {
                return false
            }
        }
        return true
    }
}
