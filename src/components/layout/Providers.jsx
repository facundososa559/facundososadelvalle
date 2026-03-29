"use client";

import { useState } from "react";
import Navbar from "@/components/ui/NavBar";

export default function Providers({ children }) {
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      <Navbar onToggleDark={toggleDark} isDark={dark} />
      {children}
    </>
  );
}