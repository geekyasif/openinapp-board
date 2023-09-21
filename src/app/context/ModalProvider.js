"use client";

import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext();

function ModalProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, handleModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;


export function useModal() {
  return useContext(ModalContext)
}