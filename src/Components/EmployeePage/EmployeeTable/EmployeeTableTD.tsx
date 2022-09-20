interface EmployeeTableTDProps {
    text: string;
    index : number
}

const EmployeeTableTD = ({ text, index }: EmployeeTableTDProps) => {
    return <td > {text}</td>;
};

export default EmployeeTableTD;
