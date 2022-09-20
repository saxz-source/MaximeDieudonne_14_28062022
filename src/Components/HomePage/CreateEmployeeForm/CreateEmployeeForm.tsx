import InputWrapper from "./InputWrapper";
import { ValidationErrors } from "final-form";
import { Field, Form } from "react-final-form";
import {
    EmployeeFormErrors,
    validateEmployeeForm,
} from "../../../Functions/employeeFormValidation";
import SelectInputWrapper from "./SelectInputWrapper";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../../Features/employees.slice";

const CreateEmployeeForm = () => {
    const selectOptions: { text: string; value: string }[] = [
        {
            text: "Sales",
            value: "sales",
        },
        {
            text: "Marketing",
            value: "marketing",
        },
        {
            text: "Engineering",
            value: "engineering",
        },
        {
            text: "Human Ressources",
            value: "humanRessources",
        },
        {
            text: "Legal",
            value: "legal",
        },
    ];
    const dispatch = useDispatch();

    const onSubmit = (e: any) => {
        dispatch(addEmployee(e));
        return;
    };

    const validateForm = (
        formValues: any
    ): ValidationErrors | Promise<ValidationErrors> => {
        const errors: EmployeeFormErrors = validateEmployeeForm(formValues);
        return errors;
    };

    return (
        <Form
            onSubmit={onSubmit}
            validate={validateForm}
            render={({ handleSubmit }) => (
                <form id="create-employee" onSubmit={handleSubmit}>
                    <fieldset className="personal fieldset--grid">
                        <legend>General</legend>
                        <Field name="firstName">
                            {({ input, meta }) => {
                                return (
                                    <>
                                        <InputWrapper
                                            labelText="First Name"
                                            inputId="first-name"
                                            inputType="text"
                                            {...input}
                                            meta={meta}
                                        ></InputWrapper>
                                    </>
                                );
                            }}
                        </Field>
                        <Field name="lastName">
                            {({ input, meta }) => {
                                return (
                                    <>
                                        <InputWrapper
                                            inputId="last-name"
                                            inputType="text"
                                            labelText="Last Name"
                                            {...input}
                                            meta={meta}
                                        ></InputWrapper>
                                    </>
                                );
                            }}
                        </Field>
                        <Field name="dateOfBirth">
                            {({ input, meta }) => {
                                return (
                                    // <DateInputWrapper
                                    //     inputId="date-of-birth"
                                    //     labelText="Date of birth"
                                    //     input={input}
                                    //     meta={meta}
                                    // />
                                    <>
                                        <InputWrapper
                                            inputId="date-of-birth"
                                            inputType="date"
                                            labelText="Date of birth"
                                            {...input}
                                            meta={meta}
                                        ></InputWrapper>
                                    </>
                                );
                            }}
                        </Field>
                        <Field name="startDate">
                            {({ input, meta }) => {
                                return (
                                    <>
                                        <InputWrapper
                                            inputId="start-date"
                                            inputType="date"
                                            labelText="Start Date"
                                            {...input}
                                            meta={meta}
                                        ></InputWrapper>
                                    </>
                                );
                            }}
                        </Field>
                    </fieldset>

                    <fieldset className="address fieldset--grid">
                        <Field name="street">
                            {({ input, meta }) => {
                                return (
                                    <>
                                        <InputWrapper
                                            labelText="Street"
                                            inputId="street"
                                            inputType="text"
                                            {...input}
                                            meta={meta}
                                        ></InputWrapper>
                                    </>
                                );
                            }}
                        </Field>
                        <Field name="city">
                            {({ input, meta }) => {
                                return (
                                    <>
                                        <InputWrapper
                                            inputId="city"
                                            inputType="text"
                                            labelText="City"
                                            {...input}
                                            meta={meta}
                                        ></InputWrapper>
                                    </>
                                );
                            }}
                        </Field>
                        <Field name="state">
                            {({ input, meta }) => {
                                return (
                                    <>
                                        <InputWrapper
                                            inputId="state"
                                            inputType="text"
                                            labelText="State"
                                            {...input}
                                            meta={meta}
                                        ></InputWrapper>
                                    </>
                                );
                            }}
                        </Field>
                        <Field name="zipCode">
                            {({ input, meta }) => {
                                return (
                                    <>
                                        <InputWrapper
                                            inputId="zip-code"
                                            inputType="text"
                                            labelText="Zip Code"
                                            {...input}
                                            meta={meta}
                                        ></InputWrapper>
                                    </>
                                );
                            }}
                        </Field>

                        <legend>Address</legend>
                    </fieldset>

                    <fieldset>
                        <Field name="department">
                            {({ input, meta }) => {
                                return (
                                    <SelectInputWrapper
                                        labelVisible={false}
                                        options={selectOptions}
                                        inputId="departementInput"
                                        labelText="Departement"
                                        {...input}
                                        meta={meta}
                                    />
                                );
                            }}
                        </Field>
                        <legend>Department</legend>
                    </fieldset>
                    <div className="form--button-zone">
                        <button type="submit"> button </button>
                    </div>
                </form>
            )}
        />
    );
};

export default CreateEmployeeForm;
// <SubmitButton text={"SAVE"} classNames={"formButton"} />
