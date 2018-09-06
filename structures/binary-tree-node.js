module.exports = class BinaryTreeNode {

    constructor(val, leftNode, rightNode) {
        this.val = val || null;
        this.left = leftNode;
        this.right = rightNode;
    }

    addLeft(val) {
        this.left = val;
    }

    addRight(val) {
        this.right = val;
    }

}