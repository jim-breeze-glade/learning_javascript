// Does not have error handling! You should just test in production!

const targetDate = "2025-10-22"; // Days since date
const currDate = "2025-12-21";  // Current date

// Lookup values for day of the year for first day of each month
const dayOfYear = {
    "01": 0,
    "02": 32,
    "03": 60,
    "04": 91,
    "05": 121,
    "06": 152,
    "07": 182,
    "08": 213,
    "09": 244,
    "10": 274,
    "11": 305,
    "12": 335
}

const splitTarget = targetDate.split("-");
const targetYear = splitTarget[0];
const targetMonth = splitTarget[1];
const targetDay = splitTarget[2];

const splitCurr = currDate.split("-");
const currYear = splitCurr[0];
const currMonth = splitCurr[1];
const currDay = splitCurr[2]; 


function isLeapYear(year) { // Checks if year is leap year to adjust DoY after 3/1
    if (year%400 === 0) {
        return true;
    } else if (year%100 === 0) {
        return false;
    } else if (year%4 === 0) {
        return true;
    } else {
        return false;
    }
}
function calcDayOfYear(year, month, day) {  // Returns the day of year out of 365
    monthVal = dayOfYear[month] * 1;
    dayVal = day * 1;
    yearVal = year * 1;
    if (isLeapYear(year) && month > 2){
        return monthVal + dayVal;
    } else {
        return monthVal + dayVal -1;
    }
}
function daysFromYears(targetYear, currYear) {  // Main calculation function
    if (targetYear === currYear) { 
        daysSince = calcDayOfYear(currYear, currMonth, currDay) - calcDayOfYear(targetYear, targetMonth, targetDay);
    } else if (targetYear < currYear) {
        const targetYearInt = targetYear * 1;
        let yearArray = [];
        for (let i = targetYearInt; i < currYear; i++) {
            yearArray.push(i);
        }
        let leapCount = 0;
        for (year in yearArray) {
            if (isLeapYear(year)) {
                leapCount++
        }
    }
    daysSince = leapCount + yearArray.length * 365 - calcDayOfYear(targetYear, targetMonth, targetDay) + calcDayOfYear(currYear, currMonth, currDay);
    }
    return `${daysSince} days since ${targetDate}\ncurrent date: ${currDate}`
}
console.log(daysFromYears(targetYear, currYear)); // Logs number of days to console after all functions process data