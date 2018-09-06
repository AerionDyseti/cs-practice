const BinaryTreeNode = require('./structures/binary-tree-node');
const Queue = require('./structures/queue');
const Stack = require('./structures/stack');


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



function breadthFirstSearch(treeRoot, wantedValue) {

    if (!treeRoot)
        throw new Error("Tree must have at least one node.");


    const nodeQueue = new Queue();
    nodeQueue.push(treeRoot);

    while (!nodeQueue.isEmpty()) {
        let currentNode = nodeQueue.pop();
        if (currentNode.val === wantedValue) {
            return true;
        }
        if (currentNode.left) nodeQueue.push(currentNode.left);
        if (currentNode.right) nodeQueue.push(currentNode.right);
    }

    return false;

}


function depthFirstSearch(treeRoot, wantedValue) {

    if (!treeRoot)
        throw new Error("Tree must have at least one node");

    const nodeStack = new Stack();
    nodeStack.push(treeRoot);

    while (!nodeStack.isEmpty()) {
        let currentNode = nodeStack.pop();

        if (currentNode.val === wantedValue) {
            return true;
        }
        if (currentNode.left) nodeStack.push(currentNode.left);
        if (currentNode.right) nodeStack.push(currentNode.right);
    }

    return false;
}


console.log(breadthFirstSearch(newTree, "F"));
console.log(breadthFirstSearch(newTree, "A"));
console.log(breadthFirstSearch(newTree, "Q"));
console.log(breadthFirstSearch(newTree, 22));


console.log(depthFirstSearch(newTree, "F"));
console.log(depthFirstSearch(newTree, "A"));
console.log(depthFirstSearch(newTree, "Q"));
console.log(depthFirstSearch(newTree, 22));