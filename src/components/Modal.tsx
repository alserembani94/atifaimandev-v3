import React, { SyntheticEvent } from "react";
import ReactDOM from "react-dom";
import { MdClose } from "react-icons/md";

type ModalProps = {
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ onClose, children }: ModalProps) => {
  const handleCloseClick = (e: SyntheticEvent) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = (
    <div className="absolute w-screen h-screen bg-[#00000055] top-0 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg p-4">
        <div className="modal-header">
          <button onClick={handleCloseClick}>
            <MdClose />
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal-root")!
  );
};

export default Modal;
