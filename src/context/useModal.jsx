import { createContext, useContext, useState } from "react";

const ModalContext = createContext({
  isModalOpen: false,
  modalType: "",
  toggleModal: () => {},
});

export function ModalContextProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setModalType("");
  };

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        toggleModal,
        modalType,
        setModalType,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}

export default useModal;
