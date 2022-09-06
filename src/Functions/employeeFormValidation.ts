import { dateBeforeToday } from "./dateBeforeToday";
import {
    regexCityCheck,
    regexStreetCheck,
    regexZipCode,
} from "./regex_adressCheck";
import { regexNameCheck } from "./regex_nameCheck";

export interface EmployeeFormErrors {
    firstName?: string;
    lastName?: string;
    dateOfBirth?: string;
    startDate?: string;
    street?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    departmentv: string;
}

/**
 *
 * @param formValues the values from the employee form
 * @returns an error that has to be empty if there is no error (asked by the library)
 */
export const validateEmployeeForm = (formValues: any): EmployeeFormErrors => {
    const errors: any = {};

    const firstNameError = validateFirstName(formValues.firstName);
    if (firstNameError !== "") errors.firstName = firstNameError;
    const lastNameError = validateLastName(formValues.lastName);
    if (lastNameError !== "") errors.lastNameName = lastNameError;
    const dateOfBirthError = validateDateOfBirth(formValues.dateOfBirth);
    if (dateOfBirthError !== "") errors.dateOfBirth = dateOfBirthError;
    const startDateError = validateStartDate(formValues.startDate);
    if (startDateError !== "") errors.startDate = startDateError;
    const streetError = validateStreet(formValues.street);
    if (streetError !== "") errors.street = streetError;
    const cityError = validateCity(formValues.city);
    if (cityError !== "") errors.city = cityError;
    const stateError = validateState(formValues.state);
    if (stateError !== "") errors.state = stateError;
    const zipCodeError = validateZipCode(formValues.zipCode);
    if (zipCodeError !== "") errors.zipCode = zipCodeError;
    const departmentError = valideDepartment(formValues.department);
    if (departmentError !== "") errors.department = departmentError;

    return errors;

    // return {
    //     firstName: validateFirstName(formValues.firstName),
    //     lastName: validateLastName(formValues.lastName),
    //     dateOfBirth: validateDateOfBirth(formValues.dateOfBirth),
    //     startDate: validateStartDate(formValues.startDate),
    //     street: validateStreet(formValues.street),
    //     city: validateCity(formValues.city),
    //     state: validateState(formValues.state),
    //     zipCode: validateZipCode(formValues.zipCode),
    //     department: valideDepartment(formValues.department),
    // };
};

const valideDepartment = (department: string) => {
    if (!department) return "required";
    return "";
};
const validateFirstName = (firstName: string) => {
    if (!firstName) return "Required";
    if (!regexNameCheck(firstName)) return "Contains invalid characters";
    if (firstName.length < 2) return "Too short (min 2)";
    if (firstName.length > 30) return "Too long (max 30)";
    return "";
};

const validateLastName = (lastName: string) => {
    if (!lastName) return "Required";
    if (!regexNameCheck(lastName)) return "Contains invalid characters";
    if (lastName.length < 2) return "Too short (min 2)";
    if (lastName.length > 30) return "Too long (max 30)";
    return "";
};

const validateDateOfBirth = (dateOfBirth: Date) => {
    if (!dateOfBirth) return "Required";
    if (!dateBeforeToday(dateOfBirth)) return "Select a day before today";
    return "";
};

const validateStartDate = (startDate: Date) => {
    if (!startDate) return "Required";
    return "";
};

const validateCity = (city: string) => {
    if (!city) return "Required";
    if (!regexCityCheck(city)) return "Contains invalid characters";
    return "";
};

const validateStreet = (street: string) => {
    if (!street) return "Required";
    if (!regexStreetCheck(street)) return "Contains invalid characters";
    return "";
};

const validateState = (state: string) => {
    if (!state) return "Required";
    if (!regexCityCheck(state)) return "Contains invalid characters";
    return "";
};

const validateZipCode = (zipCode: string) => {
    if (!zipCode) return "Required";
    if (zipCode.length < 5) return "Too short (min. 5)";
    if (zipCode.length > 10) return "Too long (max. 10)";
    if (!regexZipCode(zipCode)) return "Contains invalid characters";

    return "";
};
