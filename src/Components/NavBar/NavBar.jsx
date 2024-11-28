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
          <img className="NavIcon" src="https://cdn2.steamgriddb.com/logo/9d5ec17d0e985f11571508f9f7734bcb.png" alt=""></img>
          <h1 className="Title">RDR FAN</h1>
          <button className="OpenModal" onClick={openModal}>Recibir Novedades</button>

          {/* Modal componente que recibe las props isOpen y closeModal */}
          <Modal isOpen={isModalOpen} closeModal={closeModal} />
        </nav>
      </header>
    </>
  );
}
