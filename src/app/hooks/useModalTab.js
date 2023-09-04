"use client";

import { useState } from "react";

export default function useModalTab() {
  const [activeTab, setIsActiveTab] = useState("basic");

  function setHandleModalActiveTab(name) {
    setIsActiveTab(name);
  }

  return { activeTab, setHandleModalActiveTab };
}
