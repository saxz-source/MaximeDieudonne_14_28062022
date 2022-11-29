import { Modal } from "tiny-modal-testy";

interface FormModalProps {
    isOpen: boolean;
    isSuccess: boolean;
    closeModal: () => void;
}

const FormModal = ({ isOpen, isSuccess, closeModal }: FormModalProps) => {
    const getMessages = (): string[] => {
        return isSuccess
            ? ["Employee successfully created !"]
            : ["An error occured"];
    };

    const modalCSSProperties = {
        zIndex: 1000,
        backgroundColor: "#eff9bd",
        color: "black",
        fontWeight: 350,
    };

    const closeModalCSSProperties= {
        backgroundColor: "transparent",
        color: "#6c850f",
    };

    const backgroundShadow: boolean = true;

    return (
        <Modal
            isOpen={isOpen}
            modalMessages={getMessages()}
            closeModal={closeModal}
            modalCSSProperties={modalCSSProperties}
            closeModalCSSProperties={closeModalCSSProperties}
            backGroundShadow={backgroundShadow}
        />
    );
};

export default FormModal;
