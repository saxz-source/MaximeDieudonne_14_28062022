export const regexStreetCheck = (street: string) => {
    const nameRegex = /[0-9a-zA-ZÀ-ú'-\s]*/g;
    const streetMatch = street.match(nameRegex)?.[0];
    if ((streetMatch as string) === street) {
        return true;
    }
    return false;
};



export const regexCityCheck = (city: string) => {
    const nameRegex = /[0-9a-zA-ZÀ-ú'-\s]*/g;
    const cityMatch = city.match(nameRegex)?.[0];
    if ((cityMatch as string) === city) {
        return true;
    }
    return false;
};

/**
 *
 * @param zipCode
 * @returns
 */
export const regexZipCode = (zipCode: string) => {
    const nameRegex = /[0-9-\s]*/g;
    const zipMatch = zipCode.match(nameRegex)?.[0];
    if ((zipMatch as string) === zipCode) {
        return true;
    }
    return false;
};
