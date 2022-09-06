import "./Buttons.css";

interface SubmitButtonProps {
    text: string;
    classNames: string;
}

const SubmitButton = ({ text, classNames }: SubmitButtonProps) => {
    return (
        <button type="submit" className={ "button--basics " + classNames}>
            {text}
        </button>
    );
};

export default SubmitButton;
