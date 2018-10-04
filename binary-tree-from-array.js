
let TreeNode = require('./structures/binary-tree-node');

let a = new TreeNode('a'),
    b = new TreeNode('b'),
    c = new TreeNode('c'),
    d = new TreeNode('d'),
    e = new TreeNode('e'),
    f = new TreeNode('f'),
    g = new TreeNode('g');

let arr = ['a', 'b', 'd', 'e', 'c', 'f', 'g'];

let depth = Math.ceil(Math.log(arr.length) / Math.LN2);

console.log(depth);