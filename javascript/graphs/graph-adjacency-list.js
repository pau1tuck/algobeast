/* A graph is a versatile data structure that consists of a set of nodes (also called vertices) and a set of edges connecting some pairs of these nodes. Graphs are great for modeling networks like social connections, roads, or internet links.

In JavaScript, you can represent a graph using objects and arrays. There are a few ways to implement it, but one common method is using an adjacency list. In an adjacency list, each node points to a list of all the nodes it's connected to. This method is efficient in terms of space when you've got a sparse graph (where most nodes aren't directly connected to each other).

Here’s a simple implementation of a graph using an adjacency list in JavaScript: */

class Graph {
    constructor() {
      this.adjacencyList = {};
    }
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
      }
    }
    addEdge(vertex1, vertex2) {
      if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1); // This line makes it an undirected graph
      }
    }
    removeEdge(vertex1, vertex2) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
    }
    removeVertex(vertex) {
      while (this.adjacencyList[vertex].length) {
        const adjacentVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex, adjacentVertex);
      }
      delete this.adjacencyList[vertex];
    }
  }
  // Example usage
  const g = new Graph();
  g.addVertex("Tokyo");
  g.addVertex("Dallas");
  g.addVertex("Aspen");
  g.addEdge("Tokyo", "Dallas");
  g.addEdge("Dallas", "Aspen");

  console.log(g.adjacencyList);
