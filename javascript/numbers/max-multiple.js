/* Given a divisor and a bound, find the largest integer N such that:
                N is divisible by divisor.
                N is less than or equal to bound.
                N is greater than 0.
                It is guaranteed that such a number exists. */

function maxMultiple(divisor, bound) {
    return bound - (bound % divisor);
}

/*
  O(1) time | O(1) space
*/

function solution(divisor, bound) {
    return Math.floor(bound / divisor) * divisor;
}
