module.exports = class VertexListGraph {

    // each property on the graph object represents a vertex, 
    // each of which has properties that represent connections to other vertices.
    constructor(numVertices) {
        this.numVertices = numVertices;
        this.graphObj = {};
    }

    addVertex(v) {
        this.graphObj[v] = {};
    }

    addEdge(v, w) {
        this.graphObj[v][w] = true;
    }

    hasVertex(v) {
        return this.graphObj.hasOwnProperty(v);
    }

    hasEdge(v, w) {
        return this.graphObj[v].hasOwnProperty(w);
    }

}