export type Employee = {
    [key: string]: any;
    id: string;
    firstName: string;
    lastName: string;
    birthDate: Date;
    startDate: Date;
    street: string;
    city: string;
    state: string;
    zipCode: number;
    department: string;
};

export type Adress = {
    street: string;
    city: string;
    state: string;
    zipCode: number;
};
