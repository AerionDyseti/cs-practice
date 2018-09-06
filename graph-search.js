const Graph = require('./structures/graph');
const Queue = require('./structures/queue');
const Stack = require('./structures/stack');

let g = new Graph();

let nodeA = "A";
let nodeB = "B";
let nodeC = "C";
let nodeD = "D";
let nodeE = "E";

g.addVertex(nodeA);
g.addVertex(nodeB);
g.addVertex(nodeC);
g.addVertex(nodeD);
g.addVertex(nodeE);

g.addEdge(nodeA, nodeB);
g.addEdge(nodeB, nodeC);
g.addEdge(nodeC, nodeD);
g.addEdge(nodeD, nodeA);
g.addEdge(nodeC, nodeE);


console.log("Edge List: ", ...g.edgeSet);
console.log("Vertext List: ", ...g.vertexSet);

console.log();

/**
 *
 *
 * @param {Graph} graph
 * @param {*} startVal
 * @param {*} endVal
 */
function HasPathBFS(graph, startVal, endVal) {

    if (!graph.vertexSet.has(startVal) || !graph.vertexSet.has(endVal)) {
        throw new Error("Cannot find path to or from nodes that do not exist.");
    }

    const nodeQueue = new Queue();
    nodeQueue.push([...graph.vertexSet][0]);

    while (!nodeQueue.isEmpty()) {
        let currentNode = nodeQueue.pop();
        if (currentNode === endVal) { return true; }
        // This is O(n) because we have to iterate over the edge set.
        // If we used pointers (similar to tree), we could reduce this to O(1);
        for (let edge of graph.edgeSet.values()) {
            if (edge[0] === currentNode || edge[1] === currentNode) {
                nodeQueue.push(edge[1] === currentNode ? edge[0] : edge[1])
            }
        }
    }
    return false;
}


console.log(HasPathBFS(g, nodeA, nodeE));

/**
 *
 *
 * @param {Graph} graph
 * @param {*} startVal
 * @param {*} endVal
 */
function HasPathDFS(graph, startVal, endVal) {
    const nodeStack = new Stack();
    const seenNodes = new Set();
    nodeStack.push([...graph.vertexSet][0]);

    while (!nodeStack.isEmpty()) {

        let currentNode = nodeStack.pop();
        if (currentNode === endVal) { return true; }

        if (seenNodes.has(currentNode)) {
            continue;
        }
        else {
            seenNodes.add(currentNode);
        }


        for (let edge of graph.edgeSet) {
            if (edge[0] === currentNode) nodeStack.push(edge[1]);
            if (edge[1] === currentNode) nodeStack.push(edge[0]);
        }
    }

    return false;
}

console.log(HasPathDFS(g, nodeA, nodeE));