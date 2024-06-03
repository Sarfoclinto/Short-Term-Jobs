import React from "react";

function Modal({ closemodal, openmodal, children }) {
  return (
    <div
      id="overlay"
      className="absolute top-0 bottom-0 left-0 right-0 bg-stone-300/45"
    >
      {openmodal && (
        <div className="relative w-2/5 h-2/5 bg-blue-300/35">
          <button
            onClick={closemodal}
            className="absolute bg-red-500 px-3 py-1 rounded-full right-3 top-2 font-extrabold "
          >
            &times;
          </button>
          {children}
        </div>
      )}
    </div>
  );
}

export default Modal;
