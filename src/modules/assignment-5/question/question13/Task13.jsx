import React, { useState } from 'react';
import Modal from './Modal';

const  Task13=()=> {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="App">
      <p>This is my modal</p>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} toggleModal={closeModal} title="Fruits">
        <div>
          <h2>Favourite fruits</h2>
          <ul>
            <li>Mango</li>
            <li>Apple</li>
            <li>Strawberry</li>
            <li>Orange</li>
          </ul>
        </div>
      </Modal>
    </div>
  );
}

export default Task13;
