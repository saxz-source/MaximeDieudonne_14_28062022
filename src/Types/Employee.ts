export type Employee = {
    id : string;
    firstName: string;
    lastName: string;
    birthDate: Date;
    startDate: Date;
    adress: Adress;
    department: string;
};

export type Adress = {
    street: string;
    city: string;
    state: string;
    zipCode: number;
};
