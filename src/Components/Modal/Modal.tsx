import { useEffect, useState } from "react";
import "./Modal.css";
import {
    CloseModalCSSProperties,
    ModalCSSProperties,
} from "./Types/ModalCSSProperties";

interface ModalProps {
    modalMessages: string[];
    modalCSSProperties: ModalCSSProperties;
    closeModalCSSProperties: CloseModalCSSProperties;
    isOpen: boolean;
    backGroundShadow: boolean;
    closeModal: () => void;
}

const Modal = ({
    modalMessages,
    isOpen,
    closeModal,
    modalCSSProperties,
    closeModalCSSProperties,
    backGroundShadow,
}: ModalProps) => {
    const [open, setOpen] = useState(false);

    /**
     * Close the modal
     * @returns {void}
     */
    const onCloseModal = (): void => {
        setOpen(false);
        closeModal();
    };

    // Handle the visibility of the modal
    useEffect(() => {
        setOpen(isOpen);

    }, [isOpen]);

    return (
        <>
           {open && (
                <div
                    className={
                        (backGroundShadow
                            ? "shadowBackground"
                            : "transparentBackground") + " modalPage"
                    }
                    onClick={onCloseModal}
                >
                    <div className="modal" style={modalCSSProperties}>
                        {modalMessages?.map((m: string) => {
                            return (
                                <p
                                    className="modal--message"
                                    key={new Date().toString()}
                                >
                                    {m}
                                </p>
                            );
                        })}
                        <span
                            className="modal--close"
                            onClick={onCloseModal}
                            style={closeModalCSSProperties}
                        >
                            X
                        </span>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
