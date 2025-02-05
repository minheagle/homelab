import { useState, useCallback, useEffect } from "react";

const useClickOutside = (ref) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOutside = useCallback((event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  return [isOpen, setIsOpen];
};

export default useClickOutside;
