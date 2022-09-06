import { useState } from "react";
import DatePicker from "react-date-picker";
import { FieldInputProps, FieldMetaState } from "react-final-form";

interface DateInputWrapper {
    labelText: string;
    inputId: string;
    meta?: FieldMetaState<any>;
    input: FieldInputProps<any>;
}

const DateInputWrapper = ({
    labelText,
    inputId,
    meta,
    input,
}: DateInputWrapper) => {
    const [value, onChange] = useState(new Date());

    return (
        <div className="dateInputWrapper">
            <label htmlFor={inputId} className="formLabel">
                {labelText}
            </label>
            <DatePicker
                onChange={(newDate: Date) => {
                    onChange(newDate);
                    input.onChange(newDate)
                }}
                value={value}
            />
            {/* <input
                type={inputType}
                id={inputId}
                placeholder={labelText}
                {...input}
                className={meta?.error ? "input--hasError" : ""}
            />
            */}
            {meta?.error && meta?.touched && (
                <span className="formError"> {meta?.error} </span>
            )}
        </div>
    );
};

export default DateInputWrapper;
