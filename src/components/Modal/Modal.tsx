import './Modal.css';
import { ArrowsButton } from '..';
import { ModalType } from './ModalType';
import { useEffect, useRef } from 'react';

const Modal = ({ children, opened, setOpened }: ModalType) => {

  const modalRef = useRef<HTMLDivElement | null>(null);

  const modalState = () => {
    if (opened && modalRef.current) {
      modalRef.current.style.animation = "fadeOut .5s cubic-bezier(0.645, 0.045, 0.355, 1) forwards";
      setTimeout(() => setOpened(false), 500);
    }
  }

  const keyUpEvent = (e: KeyboardEvent) => {
    if (e.code === "Escape") modalState();
  }

  useEffect(() => {
    document.querySelector("body")!.style.overflowY = "hidden";
    document.addEventListener("keyup", keyUpEvent);

    return () => {
      document.querySelector("body")!.style.overflowY = "auto";
      document.removeEventListener("keyup", keyUpEvent);
    }
  }, [])

  return (
    <div className='modal-wrapper' ref={modalRef}>
      <div className='modal'>
        <div className='modal-close'>
          <ArrowsButton text='CLOSE' onClick={modalState} />
        </div>
        <div className='modal-container'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal