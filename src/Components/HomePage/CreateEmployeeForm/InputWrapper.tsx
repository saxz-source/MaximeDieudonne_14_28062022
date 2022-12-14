import { FieldMetaState } from "react-final-form";
import FormError from "./FormError";

interface InputWrapperProps {
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
}: InputWrapperProps) => {
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
            {meta?.error && meta?.touched && <FormError error={meta?.error} />}
        </div>
    );
};

export default InputWrapper;
