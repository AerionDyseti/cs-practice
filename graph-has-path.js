const Queue = require('./structures/queue');
const GraphNode = require('./structures/graph-node-with-neighbors');

function hasPath(p, q) {
    let visitedSet = new Set();
    let nodeQueue = new Queue();
    nodeQueue.push(p);

    while (!nodeQueue.isEmpty()) {
        let currentNode = nodeQueue.pop();
        if (currentNode.val == q.val) {
            return true;
        }
        visitedSet.add(currentNode);
        for (let neighbor of currentNode.neighbors) {
            if (!visitedSet.has(neighbor)) {
                nodeQueue.push(neighbor);
            }
        }
    }
    return false;
}

/*
    A > C > E
    v
    B > D
 */

let nodeA = new GraphNode("A");
let nodeB = new GraphNode("B");
let nodeC = new GraphNode("C");
let nodeD = new GraphNode("D");
let nodeE = new GraphNode("E");

nodeA.neighbors.push(nodeB, nodeC);
nodeB.neighbors.push(nodeD);
nodeC.neighbors.push(nodeE);

console.log(hasPath(nodeA, nodeE));
console.log(hasPath(nodeA, nodeD));
console.log(hasPath(nodeB, nodeE));

