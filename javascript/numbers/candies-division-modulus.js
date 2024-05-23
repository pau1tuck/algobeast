/* `n` children have `m` pieces of candy.
They want to eat as much candy as they can, but each child must eat exactly the same amount of candy as any other child.
Determine how many pieces of candy will be eaten by all of the children together. Individual pieces of candy cannot be split. */

function shareCandies(n, m) { // e.g. 3, 7
    return m - (m % n); // e.g. 7 - (7 % 3 = 1) = 6
}
//  O(1) time | O(1) space

function shareCandies2(n, m) {
    let children = n;
    let candy = m;
    return Math.floor(candy / children) * children;
}
