/**
 * Class that represents a graph using a Set of Nodes and a Set of key value arrays mapping nodes together.
 *
 * @class Graph
 */
module.exports = class Graph {
    /**
     *Creates an instance of Graph.
     * @param {*} optsObj {directionalCount: 0, 1, 2} undirected, unidirectional, bidirectional.
     * @memberof Graph
     */
    constructor(optsObj = {}) {
        optsObj = Object.assign({}, { directionCount: 0 }, optsObj);
        this.directional = optsObj.directionCount;
        this.vertexSet = new Set();
        this.edgeSet = new Set();
    }

    addVertex(value) {
        this.vertexSet.add(value);
    }

    addEdge(v, w) {

        if (!this.vertexSet.has(v) || !this.vertexSet.has(w)) {
            throw new Error("Can only add edges between Vertices that exist.");
        }

        // If undirected, then we check to see if either way exists.
        if (this.directional === 0 && !this.edgeSet.has([v, w]) && !this.edgeSet.has([w, v])) {
            this.edgeSet.add([v, w]);
        }

        // If one-directional, error if we try to add a reversed edge.
        else if (this.directional === 1) {
            if (this.edgeSet.has([w, v]))
                throw new Error("Cannot add reverse edge to unidirectional graph.");
            this.edgeSet.add([v, w]);

        }

        // Otherwise, just try to add it. (Set will already prevent duplicates).
        else if (this.directional === 2) {
            this.edgeSet.add([v, w]);
        }

    }

}

