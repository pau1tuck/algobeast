/* n children have m pieces of candy.
They want to eat as much candy as they can,
but each child must eat exactly the same amount of candy as any other child.
Determine how many pieces of candy will be eaten by all of the children together.
Individual pieces of candy cannot be split. */

//  O(1) time | O(1) space
function shareCandies1(n, m) {
    let children = n;
    let candy = m;
    return Math.floor(candy / children) * children;
}

function shareCandies2(n, m) {
    return m - (m % n);
}
