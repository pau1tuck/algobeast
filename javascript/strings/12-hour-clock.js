/* Input: A string representing time in 24-hour (military) format (e.g., "19:45:00").

Output: A string representing time in 12-hour format with "AM" or "PM" (e.g., "07:45:00 PM").

Edge Cases:

- Midnight ("00:00:00") should convert to "12:00:00 AM".
- Noon ("12:00:00") should convert to "12:00:00 PM".
- Hours between 01 and 11 should remain the same but append "AM".
- Hours between 13 and 23 should be converted by subtracting 12 and append "PM". */

const militaryTo12Hour = (s) => {
    // Extract the hour, minutes, and seconds from the input string
    const HH = s.slice(0, 2);
    const MM = s.slice(3, 5);
    const SS = s.slice(6, 8);
    let hour = Number(HH);
    let period = "AM";

    if (hour >= 12) {
        period = "PM";
        if (hour > 12) {
            hour -= 12;
        }
    } else if (hour === 0) {
        hour = 12;
    }
    // Pad the hour to ensure it's two digits
    const formattedHour = hour.toString().padStart(2, "0");

    return `${formattedHour}:${MM}:${SS} ${period}`;
};

// Usage example
console.log(militaryTo12Hour("19:45:00")); // Output: "07:45:00 PM"
console.log(militaryTo12Hour("00:00:00")); // Output: "12:00:00 AM"
console.log(militaryTo12Hour("12:00:00")); // Output: "12:00:00 PM"
console.log(militaryTo12Hour("01:45:00")); // Output: "01:45:00 AM"
console.log(militaryTo12Hour("23:59:59")); // Output: "11:59:59 PM"
