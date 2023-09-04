"use client";

import { useState } from "react";

export default function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function setHandleIsModalOpen() {
    setIsModalOpen(!isModalOpen);
  }

  return { isModalOpen, setHandleIsModalOpen };
}
