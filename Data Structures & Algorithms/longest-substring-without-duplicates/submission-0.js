class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const charSet = new Set()
        let res = 0
        let l = 0

        for(let i = 0; i < s.length; i++){
            while(charSet.has(s[i])){
                charSet.delete(s[l])
                l++
            }
            charSet.add(s[i])
            res = Math.max(res, i - l + 1)
        }
        return res
    }
}
