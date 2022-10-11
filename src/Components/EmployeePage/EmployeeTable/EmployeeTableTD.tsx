interface EmployeeTableTDProps {
    text: string;
    index: number;
}

const EmployeeTableTD = ({ text, index }: EmployeeTableTDProps) => {
    return <td title={text}> {text}</td>;
};

export default EmployeeTableTD;
