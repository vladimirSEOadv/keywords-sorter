import React from "react";
import styles from "./Modal.module.css";
import { useModalContext } from "./modalContextProvider/ModalContextProvider";

export const Modal = ({ children }) => {
  const { modalStatus, setModalStatus } = useModalContext();
  const classNamesModal = `${styles.modal} ${modalStatus ? styles.active : ""}`;
  const classNamesModalContent = `${styles.modal__content} ${
    modalStatus ? styles.active : ""
  }`;

  return (
    <div className={classNamesModal} onClick={() => setModalStatus(false)}>
      <div
        className={classNamesModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
