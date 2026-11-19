class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stack = [];
        let sum = 0;
        for (let i = 0; i < operations.length; i++) {
            if (operations[i] === "+") {
                stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
            } else if (operations[i] === "C") {
                stack.pop();
            } else if (operations[i] === "D") {
                stack.push(stack[stack.length - 1] * 2);
            } else {
                stack.push(parseInt(operations[i]));
            }
        }
        for (let j = 0; j < stack.length; j++) {
            sum += stack[j];
        }
        return sum;
    }
}
