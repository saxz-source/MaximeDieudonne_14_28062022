import { useState } from "react";
import CreateEmpFormZone from "../CreateEmployeeForm/CreateEmpFormZone";
import FormModal from "../FormModal/FormModal" ;
import "./HomePage.css";

interface formModalInfos {
    isSuccess: boolean;
    isOpen: boolean;
}

const HomePage = () => {
    const [formModalInfos, setFormModalInfos] = useState<formModalInfos>({
        isOpen: false,
        isSuccess: true,
    });
    /**
     * Set the modal opening informations
     * @param {boolean} isOpen modal opening status
     * @param {boolean} isSuccess employee register status (fail or success, depending on the backend response)
     * @returns {void}
     */
    const handleModalOpening = (isOpen: boolean, isSuccess: boolean): void => {
        setFormModalInfos({ isOpen, isSuccess });
    };

    /**
     * Close the modal
     * @returns {void}
     */
    const closeModal = (): void => {
        setFormModalInfos({ ...formModalInfos, isOpen: false });
    };

    return (
        <>
            <main>
                <CreateEmpFormZone handleModalOpening={handleModalOpening} />

                {formModalInfos.isOpen && (
                    <FormModal
                        isOpen={formModalInfos.isOpen}
                        isSuccess={formModalInfos.isSuccess}
                        closeModal={closeModal}
                    />
                )}
            </main>
        </>
    );
};

export default HomePage;
