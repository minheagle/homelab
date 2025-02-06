import { useState, useCallback, useEffect, RefObject } from "react";

const useClickOutside = (ref: RefObject<HTMLElement>) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    },
    [ref]
  );

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

  return [isOpen, setIsOpen] as const;
};

export default useClickOutside;
