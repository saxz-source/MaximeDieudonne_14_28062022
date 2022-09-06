import { FieldMetaState } from "react-final-form";

interface SelectInputWrapper {
    labelText: string;
    inputId: string;
    options: { text: string; value: string }[];
    meta?: FieldMetaState<any>;
    labelVisible: boolean;
}

const SelectInputWrapper = ({
    labelText,
    labelVisible,
    inputId,
    options,
    meta,
    ...input
}: SelectInputWrapper) => {
    return (
        <div>
            <label
                htmlFor={inputId}
                className={labelVisible ? " formLabel" : "hiddenLabel"}
            >
                {labelText}
            </label>
            <select
                id={inputId}
                placeholder={labelText}
                {...input}
                className={
                    meta?.error && meta?.touched ? "input--hasError" : ""
                }
            >
                <option className="option--placeholder-like">Select one</option>
                {options.map((o: { value: string; text: string }) => {
                    return (
                        <option key={o.value} value={o.value}>
                            {o.text}
                        </option>
                    );
                })}
            </select>
            {meta?.error && meta?.touched && (
                <span className="formError"> {meta?.error} </span>
            )}
        </div>
    );
};

export default SelectInputWrapper;
