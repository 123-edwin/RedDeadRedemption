import { useState } from "react";
import { Modal } from "../Modal/Modal.jsx"; // Importa el componente Modal
import "./NavBar.css";  // Importa el archivo de estilos

export function NavBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header>
        <nav className="NavBar">
          <img className="NavIcon" src="/Header.png" alt="Imágen Decorativa"></img>
          <h1 className="Title">RDR FAN</h1>
          <button className="OpenModal" onClick={openModal}>Abrir Modal</button>

          {/* Modal componente que recibe las props isOpen y closeModal */}
          <Modal isOpen={isModalOpen} closeModal={closeModal} />
        </nav>
      </header>
    </>
  );
}
