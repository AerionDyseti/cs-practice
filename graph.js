class Graph {
    constructor(numVertices) {
        this.numVertices = numVertices;
        this.vertexList = {};
    }

    addVertex(v) {
        this.vertexList[v] = {};
    }

    addEdge(v, w) {
        this.vertexList[v][w] = true;
    }

    hasEdge(v, w) {
        return this.vertexList[v].hasOwnProperty(w);
    }

    hasPath(v, w) {
        let visited = [];
        return this.hasPathUtil(v, w, visited);
    }

    // DFS
    hasPathUtil(startVertex, soughtVertex, visited) {
        if (startVertex == soughtVertex) return true;
        let foundPath = false;
        for (var i in this.vertexList[startVertex]) {
            if (visited[startVertex]) {
                continue;
            }
            visited[startVertex] = true;
            foundPath = this.hasPathUtil(i, soughtVertex, visited);
        }
        return foundPath;
    }


}


let graph = new Graph();

graph.addVertex("a");
graph.addVertex("b");
graph.addVertex("c");
graph.addVertex("d");

graph.addEdge("a", "b");
graph.addEdge("b", "c");

console.log(graph.hasPath("a", "c"));
console.log(graph.hasPath("a", "d"));