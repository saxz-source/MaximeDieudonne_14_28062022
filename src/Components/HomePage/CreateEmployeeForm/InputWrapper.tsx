import { FieldMetaState } from "react-final-form";

interface InputWrapper {
    labelText: string;
    inputId: string;
    inputType: string;
    meta?: FieldMetaState<any>;
}

const InputWrapper = ({
    labelText,
    inputId,
    inputType,
    meta,
    ...input
}: InputWrapper) => {
    return (
        <div>
            <label htmlFor={inputId} className="formLabel">
                {labelText}
            </label>
            <input
                type={inputType}
                id={inputId}
                placeholder={labelText}
                {...input}
                className={meta?.error ? "input--hasError" : ""}
            />
            {meta?.error && meta?.touched && (
                <span className="formError"> {meta?.error} </span>
            )}
        </div>
    );
};

export default InputWrapper;
