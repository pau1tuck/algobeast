/* Instructions: Given a year, return the century it is in.
In the Gregorian calendar, the first century spans from the year 1 up to and including the year 100,
the second from the year 101 up to and including the year 200, and so on.
Input: A year as a non-negative integer, year.
Output: An integer representing the century the year is in. */

function getCentury(year) {
    return Math.ceil(year / 100);
}
