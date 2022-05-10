import React, { useState, useEffect } from 'react';

import Modal from './Modal';
import '../css/index.css';

export default function ListaUsuarios() {
  const [usuario, setUsuario] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    fetch('https://www.mocky.io/v2/5d531c4f2e0000620081ddce')
      .then((json) => json.json())
      .then((res) => {
        setUsuario(res);
      });
  }, []);

  const close = () => {
    setModalVisible(false);
  };

  return usuario.map((cliente) => (
    <>
      <div className="dados">
        <div className="matrix">
          <img className="img" key={cliente.img} src={cliente.img} alt="" />
          <div className="container">
            <div className="usuario">
              <div className="name">Nome do usuário: {cliente.name}</div>
            </div>
            <div className="id_user">
              <div className="id">ID: {cliente.id}</div>
              <div className="usuario">Username: {cliente.username}</div>
            </div>
          </div>

          <div className="botao">
            <button onClick={() => setModalVisible(true)}>Pagar</button>
            {isModalVisible ? (
              <Modal closeBtn={() => close()}>
                <></>
              </Modal>
            ) : null}
          </div>
        </div>
      </div>
    </>
  ));
}
