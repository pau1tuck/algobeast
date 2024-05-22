function fish(A, B) { // arr `A` and arr `B`
    const downstream = []; // Stack to keep track of the sizes of downstream fish
    let alive = 0; // Count of fish that will stay alive

    for (let i = 0; i < A.length; i++) {
        if (B[i] === 1) {
            // If the fish is swimming downstream, push it onto the stack
            downstream.push(A[i]);
        } else {
            // If the fish is swimming upstream
            while (downstream.length !== 0) {
                // There is a downstream fish to potentially collide with
                if (downstream[downstream.length - 1] > A[i]) {
                    // The downstream fish is larger and eats the upstream fish
                    break;
                } else {
                    // The upstream fish is larger and eats the downstream fish
                    downstream.pop();
                }
            }
            // If no fish are left in the downstream stack, the upstream fish survives
            if (downstream.length === 0) {
                alive++;
            }
        }
    }
    // Add all downstream fish that survived
    alive += downstream.length;
    return alive;
} // Time: O(n), where n is the number of fish; Space: O(n), for the stack in the worst case scenario.