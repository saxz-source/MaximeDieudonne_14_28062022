interface EmployeeTableTDProps {
    text: string;
}

const EmployeeTableTD = ({ text }: EmployeeTableTDProps) => {
    return <td title={text}> {text}</td>;
};

export default EmployeeTableTD;
