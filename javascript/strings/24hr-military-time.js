// Convert 12-hour clock time to military clock time.

const militaryTimeAlt = (s) => {
    // 07:45:00PM (error-prone)
    const HH = s.slice(0, 2);
    const MM = s.slice(3, 5);
    const SS = s.slice(6, 8);
    const PM = s.slice(8, 10) === "PM";

    if (PM && Number(HH) < 12) {
        const hour = Number(HH) + 12;
        return `${hour.toString()}:${MM}:${SS}`;
    }
    if (!PM && HH === "12") {
        return `00:${MM}:${SS}`;
    }
    {
        return `${HH}:${MM}:${SS}`;
    }
}; // 19:45:00   // O(1) time complexity

const militaryTime = (s) => {
    // 12:15:00AM
    const [hour, minute, secondsWithAMPM] = s.split(":"); // ["12","15","00AM"]
    const [second, period] = secondsWithAMPM.split(/(AM|PM)/); // ["00","AM"]
    let newHour = parseInt(hour, 10);

    if (period === "PM") {
        newHour = newHour < 12 ? newHour + 12 : newHour;
    } else {
        newHour = newHour === 12 ? 0 : newHour; // 0
    }
    newHour = newHour.toString().padStart(2, "0"); // 00
    return `${newHour}:${minute}:${second}`; // 00:15:00
};
