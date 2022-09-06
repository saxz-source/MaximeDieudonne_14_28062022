
/**
 * Check if the date is before today
 * @param {Date} date a date
 * @returns {boolean} true if the date is before today
 */
export const dateBeforeToday = (date: Date): boolean => {

    const today = new Date();
    console.log(today.getTime())
    if (new Date (date).getTime() < today.getTime()) return true;
    return false;
};
