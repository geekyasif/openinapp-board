"use client";

import { useState } from "react";

export default function useMenu() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  function setHandleMenu() {
    setIsMenuVisible(!isMenuVisible);
  }
  return { isMenuVisible, setHandleMenu };
}
