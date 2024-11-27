import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import "./Modal.css";

export function Modal({ isOpen, closeModal }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const modalRef = useRef(null); // Referencia al contenedor del modal
  const lastFocusedElement = useRef(null); // Guarda el último elemento enfocado antes de abrir el modal

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nombre:", name);
    console.log("Correo Electrónico:", email);
    closeModal();
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "Tab" && modalRef.current) {
        // Enfoca elementos dentro del modal
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (!focusableElements.length) return;

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    if (isOpen) {
      lastFocusedElement.current = document.activeElement; // Guarda el elemento actual enfocado
      modalRef.current?.querySelector("button, input")?.focus(); // Enfoca el primer elemento
      document.addEventListener("keydown", handleKeyDown);
    } else {
      lastFocusedElement.current?.focus(); // Restaura el enfoque al cerrar
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return (
    <div
      className="modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      ref={modalRef} // Asigna referencia al contenedor
    >
      <div className="modal-content">
        <h2 className="modal-title" id="modal-title">
          Formulario
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div id="modal-description" className="form-actions">
            <button type="submit">Enviar</button>
            <button type="button" onClick={closeModal}>
              Cerrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};
