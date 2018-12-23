function getDayName(dateString) {
    let dayname;
    // Write your code here
    var date = new Date(dateString);
    switch (date.getDay()) {
        case 0: dayname = "Sunday"; break;
        case 1: dayname = "Monday"; break;
        case 2: dayname = "Tuesday"; break;
        case 3: dayname = "Wednesday"; break;
        case 4: dayname = "Thursday"; break;
        case 5: dayname = "Friday"; break;
        case 6: dayname = "Saturday"; break;
    }
    return dayname;
}