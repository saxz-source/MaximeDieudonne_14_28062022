import { useEffect, useState } from "react";

interface FormErrorProps {
    error: string;
}

const FormError = ({ error }: FormErrorProps) => {
    const [seeError, setSeeError] = useState<boolean>(false);
    const [transitionToggle, setTransitionToggle] = useState<boolean>(false);

    const handleErrorVisibility = (bool: boolean) => {
        if (bool) {
            setSeeError(true);
            setTimeout(() => setTransitionToggle(true), 10);
        } else {
            setSeeError(false);
            setTimeout(() => setTransitionToggle(false), 300);
        }
    };

    useEffect(() => {
        if (error) {
            handleErrorVisibility(true);
        } else {
            handleErrorVisibility(false);
        }
    }, [error]);

    return (
        <>
            {seeError && (
                <span
                    className={
                        (seeError ? "displayBlock" : "displayNone") +
                        " " +
                        (transitionToggle
                            ? "formErrorVisible"
                            : "FormErrorInvisible") +
                        " " +
                        "formError"
                    }
                >
                    {error}
                </span>
            )}
        </>
    );
};

export default FormError;
