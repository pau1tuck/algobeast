/* The A* (pronounced "A-star") algorithm is a search and pathfinding algorithm used widely in computer science, particularly in the field of artificial intelligence, for navigating paths between nodes in a graph. It's especially popular in video games and robotics for finding the shortest route from a start node to a target node.

How A* Works:
A* combines features of Dijkstra's algorithm and heuristic-based searching (often using something like the Best-First Search algorithm). It uses a heuristic to estimate the cost from a current node to the goal, guiding the search direction for more efficiency than Dijkstra’s algorithm, which strictly considers the actual shortest path found so far without estimation.

Components of A*:
f(n): Total cost of the node n.
g(n): The cost from the start node to n.
h(n): The heuristic estimated cost from node n to the goal. This needs to be admissible, meaning it should not overestimate the actual cost to reach the goal. */

/* Instructions: Implement the A* algorithm to find the shortest path from a start point to an end point on a grid. Consider some cells of the grid as obstacles.
Input: A 2D grid where each cell has a value:
    0 indicates an open cell where movement is allowed.
    1 indicates an obstacle that cannot be crossed.
    A start coordinate as a tuple (startX, startY).
    An end coordinate as a tuple (endX, endY).
Output: An array of coordinates representing the path from the start to the end (inclusive). Return an empty array if no path exists. */
class PriorityQueue {
    constructor() {
        this.elements = [];
    }
    enqueue(priority, item) {
        this.elements.push({ priority, item });
        this.elements.sort((a, b) => a.priority - b.priority);
    }
    dequeue() {
        return this.elements.shift().item;
    }
    isEmpty() {
        return this.elements.length === 0;
    }
}

function heuristic(a, b) {
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y); // Manhattan distance
}

function aStar(grid, start, end) {
    const openList = new PriorityQueue();
    openList.enqueue(0, { ...start, cost: 0 });
    const cameFrom = new Map();
    const costSoFar = new Map();
    const startKey = `${start.x},${start.y}`;
    const endKey = `${end.x},${end.y}`;
    costSoFar.set(startKey, 0);

    while (!openList.isEmpty()) {
        const current = openList.dequeue();
        const currentKey = `${current.x},${current.y}`;

        if (currentKey === endKey) {
            return reconstructPath(cameFrom, current);
        }
        for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
                if (dx === 0 && dy === 0) continue;
                const nextX = current.x + dx;
                const nextY = current.y + dy;
                const nextKey = `${nextX},${nextY}`;
                if (
                    nextX >= 0 &&
                    nextX < grid.length &&
                    nextY >= 0 &&
                    nextY < grid[0].length &&
                    grid[nextX][nextY] === 0
                ) {
                    const newCost = costSoFar.get(currentKey) + 1;
                    if (!costSoFar.has(nextKey) || newCost < costSoFar.get(nextKey)) {
                        costSoFar.set(nextKey, newCost);
                        const priority = newCost + heuristic(end, { x: nextX, y: nextY });
                        openList.enqueue(priority, { x: nextX, y: nextY, cost: newCost });
                        cameFrom.set(nextKey, current);
                    }
                }
            }
        }
    }

    return [];
}

function reconstructPath(cameFrom, current) {
    const path = [];
    while (current) {
        path.unshift({ x: current.x, y: current.y });
        current = cameFrom.get(`${current.x},${current.y}`);
    }
    return path;
}

/* Explanation:
PriorityQueue: This class is used to keep the nodes to explore, prioritized by their estimated cost to reach the end.
Heuristic Function: This uses the Manhattan distance, suitable for grid-based maps where diagonal movement is not allowed, or costs more than straight movement.

A Core Logic:* Manages nodes to explore (open list), tracks the best path to each node (cameFrom), and the cost associated with each path (costSoFar).

The provided code is structured to work with a grid, handling obstacles, and can be tested with different start and end points to see how A* efficiently finds a path, if available. */
