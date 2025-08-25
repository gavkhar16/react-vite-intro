import { useState } from "react";
import "./AppHeader.css";

export default function AppHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <img src="/photo/logo.png" alt="logo" className="logo" />

      <div
        className={`burger ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`navbar ${isOpen ? "active" : ""}`}>
        <a href="#Lorem">Lorem</a>
        <a href="#Contrary">Contrary To A</a>
        <a href="#Randomised">Randomised</a>
        <a href="#Passage">Passage</a>
        <a href="#Necessary">Necessary</a>
      </nav>
    </header>
  );
}
