import React, { useEffect, useRef } from "react";

export default function useClickOutsideToClose(
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
) {
  const node = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function closeNavMenu(evt: MouseEvent) {
      if (
        isOpen &&
        node.current &&
        !node.current.contains(evt.target as Node)
      ) {
        setIsOpen!(false);
      }
    }

    document.addEventListener("mousedown", closeNavMenu);

    return () => {
      document.removeEventListener("mousedown", closeNavMenu);
    };
  }, [isOpen]);

  return node;
}
