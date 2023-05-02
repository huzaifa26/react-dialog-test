import React from 'react';
import './style.css';
import { useRef, useLayoutEffect } from 'react';

export default function App() {
  const modalRef = useRef();
  const dialogRef = useRef();

  useLayoutEffect(() => {
    modalRef.current.close();
    dialogRef.current.close();
  }, []);

  return (
    <>
      <button onClick={() => modalRef.current.showModal()}>Open Modal</button>
      <button onClick={() => modalRef.current.show()}>Open Dialog</button>
      <dialog open={false} ref={modalRef} open>
        <h1>This is a Modal</h1>
        <p>Dialog content goes here.</p>
        <button onClick={() => modalRef.current.close()}>Close Dialog</button>
      </dialog>
      <dialog open={false} ref={dialogRef} open>
        <h1>This is a dialog</h1>
        <p>Dialog content goes here.</p>
        <button onClick={() => dialogRef.current.close()}>Close Dialog</button>
      </dialog>
    </>
  );
}
