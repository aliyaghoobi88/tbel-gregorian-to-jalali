// Step 1: Parse the incoming ISO date string to a JavaScript Date object
var date = new Date(value); // 'value' is expected to be in ISO format '2024-10-20T08:55:47'
if (isNaN(date.getTime())) {
    // Handle invalid date formats
    return 'Invalid date format';
}

var gYear = date.getFullYear();
var gMonth = date.getMonth() + 1; // Month is 0-indexed, so add 1
var gDay = date.getDate();

// Time part
var gHours = date.getHours();
var gMinutes = date.getMinutes();
var gSeconds = date.getSeconds();

// Step 2: Convert Gregorian date to Jalali date
var jalaliDate = gregorianToJalali(gYear, gMonth, gDay);

// Step 3: Format the Jalali date and time
var formattedJalaliDate = jalaliDate.year + "/" + padZero(jalaliDate.month) + "/" + padZero(jalaliDate.day);
var formattedTime = formatTime(gHours, gMinutes, gSeconds);

return formattedJalaliDate + " " + formattedTime;

// Helper function to pad single digits with a leading zero
function padZero(num) {
    return (num < 10 ? '0' : '') + num;
}

// Helper function to format time
function formatTime(hours, minutes, seconds) {
    var period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // 12 AM and 12 PM case
    return padZero(hours) + ":" + padZero(minutes) + ":" + padZero(seconds) + " " + period;
}

// Step 1: Convert Gregorian date to Jalali date
function gregorianToJalali(gYear, gMonth, gDay) {
    var result = {};
    var gDayOfYear, days, depoch;
    var array = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    
    // Adjust year and month
    if (gYear <= 1600) {
        gYear -= 621;
        result.year = 0;
    } else {
        gYear -= 1600;
        result.year = 979;
    }

    var temp = (gYear > 2) ? gYear + 1 : gYear;
    gDayOfYear = array[gMonth - 1] + gDay;
    
    // Calculate the number of days passed since the Gregorian epoch
    days = Math.floor((temp + 3) / 4) + (365 * gYear) - Math.floor((temp + 99) / 100) + Math.floor((temp + 399) / 400) - 80 + gDayOfYear;
    
    result.year += 33 * Math.floor(days / 12053);
    days %= 12053;
    
    result.year += 4 * Math.floor(days / 1461);
    days %= 1461;
    
    if (days > 365) {
        result.year += Math.floor((days - 1) / 365);
        days = (days - 1) % 365;
    }

    // Calculate the Jalali month and day
    if (days < 186) {
        result.month = 1 + Math.floor(days / 31);
        result.day = 1 + (days % 31);
    } else {
        result.month = 7 + Math.floor((days - 186) / 30);
        result.day = 1 + ((days - 186) % 30);
    }

    return result;
}
