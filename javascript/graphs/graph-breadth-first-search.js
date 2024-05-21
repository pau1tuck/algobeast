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
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
    bfs(start) {
      const queue = [start];
      const result = [];
      const visited = {};
      visited[start] = true;

      while (queue.length) {
        const vertex = queue.shift();
        result.push(vertex);

        this.adjacencyList[vertex].forEach(neighbor => {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            queue.push(neighbor);
          }
        });
      }
      return result;
    }
}