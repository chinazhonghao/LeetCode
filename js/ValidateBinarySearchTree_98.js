/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    let val = Number.MIN_SAFE_INTEGER;
    let stack = [], current = root;
    while(stack.length > 0 || current !== null) {
        if (current !== null) {
            stack.push(current);
            current = current.left;
        } else {
            current = stack.pop();
            if (current.val > val) {
                val = current.val;
            } else {
                return false;
            }
            current = current.right;
        }
    }
    return true;
};