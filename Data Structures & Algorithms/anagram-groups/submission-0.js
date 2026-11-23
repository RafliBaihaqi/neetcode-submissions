class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {};
        for (let a of strs) {
            const count = new Array(26).fill(0);
            for (let b of a) {
                count[b.charCodeAt(0) - "a".charCodeAt(0)] += 1;
            }
            const key = count.join(",");
            if (!res[key]) {
                res[key] = [];
            }
            res[key].push(a);
        }
        return Object.values(res)
    }
}
