import { useState } from "react";
import "./Modal.css";

interface ModalMessage {
    text: string;
    classNames: string[];
}

interface ModalProps {
    modalMessages: ModalMessage[];
}

const Modal = ({ modalMessages }: ModalProps): JSX.Element => {
    const [open, setOpen] = useState(false);

    const closeModal = (): void => {
        setOpen(false);
    };

    return (
        <div>
            {modalMessages?.map((m: ModalMessage) => {
                return <p className={m.classNames.join(" ")}>{m.text}</p>;
            })}
            <span className="closeModal"> X </span>
        </div>
    );
};

export default Modal;
