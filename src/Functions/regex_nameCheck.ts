/**
 * Check if the name has the required regex name format
 * @param {string} name name like first name, last name etc.
 * @returns {boolean} true if the name matches
 */
export const regexNameCheck = (name: string): boolean => {
    const nameRegex = /[a-zA-ZÀ-ú'-\s]*/g;
    const nameMatch = name.match(nameRegex)?.[0];
    if ((nameMatch as string) === name) {
        return true;
    }
    return false;
};



