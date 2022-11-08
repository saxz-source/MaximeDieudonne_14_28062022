export type Employee = {
    [key: string]: any;
    id: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    startDate: string;
    street: string;
    city: string;
    state: string;
    zipCode: string;
    department: string;
};

export type Adress = {
    street: string;
    city: string;
    state: string;
    zipCode: number;
};
