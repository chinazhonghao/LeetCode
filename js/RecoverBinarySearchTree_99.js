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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
    let o = null, l = null, r = null;
    function findMax(root) {
        const stack = [];
        let max = root;
        while(root !== null || stack.length > 0) {
            if(root !== null) {
                stack.push(root);
                root = root.left;
            } else {
                root = stack.pop();
                if (root.val > max.val) {
                    max = root;
                }
                root = root.right;
            }
        }
        return max;
    }
    function findMin(root) {
        const stack = [];
        let min = root;
        while(root !== null || stack.length > 0) {
            if(root !== null) {
                stack.push(root);
                root = root.left;
            } else {
                root = stack.pop();
                if (root.val < min.val) {
                    min = root;
                }
                root = root.right;
            }
        }
        return min;
    }
    function _recursive(root) {
        if(root === null) {
            return;
        }
        let left = null;
        if(root.left !== null) {
            left = findMax(root.left);
        }
        let right = null;
        if(root.right !== null) {
            right = findMin(root.right);
        }
        if(left !== null && left.val > root.val) {
            l = left;
        }
        if (right !== null && right.val < root.val) {
            r = right;
        }
        if((l !== null || r !== null) && o === null) {
            o = root;
            return;
        }
        _recursive(root.left);
        _recursive(root.right);
    }
    _recursive(root);
    function swap(a, b) {
        const val = a.val;
        a.val = b.val;
        b.val = val;
    }
    if(l !== null && r !== null) {
        swap(l, r);
    } else if(l !== null) {
        swap(l, o);
    } else {
        swap(r, o);
    }
};