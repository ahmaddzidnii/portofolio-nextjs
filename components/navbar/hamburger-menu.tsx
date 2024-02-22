"use client";

import { ChangeEvent, useState } from "react";
import "./navbar.css";

interface HamburgerMenuProps {
  onChangeCallback?: (value: boolean) => void;
}

export const HamburgerMenu = ({ onChangeCallback }: HamburgerMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsOpen(e.target.checked);
    if (onChangeCallback) {
      onChangeCallback(e.target.checked);
    }
  };

  return (
    <label htmlFor="check" className="hidden lg:block">
      <input
        type="checkbox"
        id="check"
        checked={isOpen}
        onChange={handleInputChange}
      />
      <div className="bar">
        <span className="dark:bg-white"></span>
        <span className="dark:bg-white"></span>
        <span className="dark:bg-white"></span>
      </div>
    </label>
  );
};
