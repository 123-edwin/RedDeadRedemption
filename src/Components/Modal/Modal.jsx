// Modal.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';
import './Modal.css';  // Asegúrate de que el CSS esté importado

export function Modal({ isOpen, closeModal }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log('Nombre:', name);
    console.log('Correo Electrónico:', email);
    closeModal();  // Cierra el modal después de enviar el formulario
  };

  if (!isOpen) return null;  // Si el modal no está abierto, no renderiza nada

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Formulario</h2>
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
          <div className="form-actions">
            <button type="submit">Enviar</button>
            <button type="button" onClick={closeModal}>Cerrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

//Validación de props
Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
};