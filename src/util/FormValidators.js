export function isTitleValid(title) {
    return isNonEmpty(title) && isShort(title);
}

export function isLocationValid(location) {
    return isNonEmpty(location) && isShort(location);
}

export function isHostValid(host) {
    return isNonEmpty(host) && isShort(host);
} 

export function isDateValid(date) {
    if (!isDateFormatValid) return false;
    const splited = date.split('/');
    if (splited.some((x) => !isNumber(x))) return false;
    const [d, m, y] = splited.map(Number);
    return isDayValid(d) && isMonthValid(m) && isYearValid(y) && isDateInFuture(y, m, d);
}

export function isTimeValid(time) {
    if (!isTimeFormatValid) return false;
    const splited = time.split(':');
    if (splited.some((x) => !isNumber(x))) return false;
    const [h, m] = splited.map(Number);
    return isHoursValid(h) && isMinutesValid(m);
}

export function isFileValid(file) {
    if (!file) return false;
    if (file.type === '.jpeg' || file.type === '.png' ||  file.type === '.svg') return true;
    return false;
}

export function isShortDescValid(sD) {
    return isNonEmpty(sD) && isNotLong(sD);
}

export function isFullDescValid(fD) {
    return isNonEmpty(fD) && isNotLonger(fD);
}

const isNonEmpty        = (str) => str.length > 0;
const isShort           = (str) => str.length <= 50;
const isNotLong         = (str) => str.length <= 100;
const isNotLonger       = (str) => str.length <= 1000;
const isNumber          = (str) => !isNaN(str);
const isHoursValid      = (h) => h > 0 && h < 25
const isMinutesValid    = (m) => m > 0 && m < 61
const isMonthValid      = (m) => m > 0 && m < 13
const isYearValid       = (y) => y > new Date().getFullYear();
const isDayValid        = (d) => d > 0 && d < 31
const isDateFormatValid = (d) => (/^\d{2}\/\d{2}\/\d{4}$/).test(d);
const isTimeFormatValid = (t) => (/^\d{2}:\d{2}$/).test(t)
const isDateInFuture    = (y, m, d) => new Date(y, m-1, d) > new Date;

