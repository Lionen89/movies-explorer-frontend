import { useEffect } from "react";

export function useEscClose(isOpen, handleClose) {

  useEffect(() => {
    if (!isOpen) return;

    function handleEsc(e) {
      if (e.key === "Escape") {
        handleClose()
      }
    }

    document.addEventListener("keydown", handleEsc);

    return () => document.removeEventListener("keydown", handleEsc)
  }, [isOpen]);
} 

export function useClickClose(isOpen, handleClose, openedClass) {

  useEffect(() => {
    if(!isOpen) return;

    function handleClickClose(e) {
      if (e.target.className.includes(openedClass)) {
        handleClose()
      }
    }
    
    document.addEventListener("mousedown", handleClickClose);    
    return () => {document.removeEventListener("mousedown", handleClickClose)
    }

  }, [isOpen])

}