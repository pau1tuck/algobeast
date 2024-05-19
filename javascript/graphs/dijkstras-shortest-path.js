/* Instructions: Implement Dijkstra’s algorithm to find the shortest path from a single source node to all other nodes in a weighted graph.
Input: A graph represented as an adjacency list graph, where graph[u] = [[v, weight], ...] describes edges from node u to node v with a given weight + an integer src representing the source node.
Output: An array of integers, where the i-th element is the minimum distance from the source node to node i. If a node is unreachable, the distance should be represented as Infinity. */

class PriorityQueue {
    /* Use of Priority Queue: While the algorithm utilizes a priority queue to efficiently manage which vertex to explore next based on the shortest known distance, the priority queue here is a tool or technique used within the context of graph traversal. The primary structure being manipulated and explored is the graph itself. */
    constructor() {
        this.queue = [];
    }

    enqueue(element, priority) {
        let added = false;
        for (let i = 0; i < this.queue.length; i++) {
            if (priority < this.queue[i].priority) {
                // Check priority for insertion
                this.queue.splice(i, 0, { element, priority });
                added = true;
                break;
            }
        }
        if (!added) {
            this.queue.push({ element, priority });
        }
    }

    dequeue() {
        return this.queue.shift();
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}
function dijkstra(graph, src) {
    const distances = new Array(graph.length).fill(Infinity); // Initialize distances
    distances[src] = 0; // Distance from src to itself is always 0
    const priorityQueue = new PriorityQueue();
    priorityQueue.enqueue(src, 0); // Start from the source node

    while (!priorityQueue.isEmpty()) {
        const { element: u, priority } = priorityQueue.dequeue();

        // Proceed only if the dequeued distance is the current known shortest
        if (priority !== distances[u]) continue;

        if (graph[u]) {
            for (const [v, weight] of graph[u]) {
                const distanceThroughU = distances[u] + weight;
                if (distanceThroughU < distances[v]) {
                    distances[v] = distanceThroughU;
                    priorityQueue.enqueue(v, distances[v]); // Enqueue with updated distance
                }
            }
        }
    }

    return distances;
}
// Time Complexity: O((V+E) * log V) - With priority queue, every vertex and edge is processed
// Space Complexity: O(V) - Storing distances and priority queue
