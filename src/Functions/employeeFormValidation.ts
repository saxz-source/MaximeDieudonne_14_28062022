export interface EmployeeFormErrors {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    startDate: string;
    street: string;
    city: string;
    state: string;
    zipCode: string;
    department: string;
}

export const validateEmployeeForm = (formValues: any): EmployeeFormErrors => {
    return {
        firstName: validateFirstName(formValues.firstName),
        lastName: validateLastName(formValues.lastName),
        dateOfBirth: validateDateOfBirth(formValues.startDate),
        startDate: validateStartDate(formValues.startDate),
        street: validateStreet(formValues.street),
        city: validateCity(formValues.city),
        state: validateState(formValues.state),
        zipCode: validateZipCode(formValues.zipCode),
        department: valideDepartment(formValues.department),
    };
};

const valideDepartment = (department: string) => {
    if (!department) return "required";
    return "";
};
const validateFirstName = (firstName: string) => {
    if (!firstName) return "Required";
    if (firstName.length < 2) return "Too short (min 2)";
    if (firstName.length > 30) return "Too long (max 30)";
    return "";
};

const validateLastName = (lastName: string) => {
    if (!lastName) return "Required";
    if (lastName.length < 2) return "Too short (min 2)";
    if (lastName.length > 30) return "Too long (max 30)";
    return "";
};

const validateDateOfBirth = (dateOfBirth: string) => {
    if (!dateOfBirth) return "Required";
    return "";
};

const validateStartDate = (startDate: string) => {
    if (!startDate) return "Required";
    return "";
};

const validateCity = (city: string) => {
    if (!city) return "Required";
    return "";
};

const validateStreet = (street: string) => {
    if (!street) return "Required";
    return "";
};

const validateState = (state: string) => {
    if (!state) return "Required";
    return "";
};

const validateZipCode = (zipCode: number) => {
    if (!zipCode) return "Required";
    return "";
};
