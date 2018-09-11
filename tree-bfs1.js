const BinaryTreeNode = require('./structures/binary-tree-node');
const Queue = require('./structures/queue');

let newTree =
    new BinaryTreeNode("A",
        new BinaryTreeNode("B",
            new BinaryTreeNode("D"),
            new BinaryTreeNode("E",
                null,
                new BinaryTreeNode("G")
            )
        ),
        new BinaryTreeNode("C",
            new BinaryTreeNode("F"),
            null
        )
    );

function breadthFirstSearch(rootNode, searchVal) {
    let nodeQueue = new Queue();
    nodeQueue.push(rootNode);

    while (!nodeQueue.isEmpty()) {
        let currentNode = nodeQueue.pop();
        if (currentNode == searchVal) {
            return true;
        }
        if (currentNode.left) nodeQueue.push(currentNode.left);
        if (currentNode.right) nodeQueue.push(currentNode.right);
    }
    return false;
}


const numTests = 1000000;
let t = process.hrtime();
for (let i = 0; i < numTests; i++) {
    breadthFirstSearch(newTree, "D");
}
t = process.hrtime(t);
console.log(`BFS took ${t[0] + (t[1] / 1e9)} seconds for ${numTests} tests.`);
console.log(`Average: ${(t[0] + (t[1] / 1e9)) / numTests} seconds per test.`);

