import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { RiDeleteBinLine } from "react-icons/ri";
import Axios from "axios";
function ModaleApagar(id) {
  const [show, setShow] = useState(false);
  const [listPessoas, setListPessoas] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/pessoas").then(response => {
      setListPessoas(response.data);
    });
  }, []);
  const Deletar = id => {
    console.log(id);
    Axios.delete(`http://localhost:3001/api/delete/pessoas/${id}`).then(
      response => {
        alert(response.data.message);
        setShow(false);
      }
    );
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="bg-info text-white">
          <Modal.Title>Alterar Dados</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>Deseja mesmo apagar??</div>
        </Modal.Body>
        <Modal.Footer className="bg-info ">
          <Button onClick={handleClose}>Cancelar</Button>

          <Button
            variant="danger "
            onClick={() => {
              Deletar(id);
            }}
          >
            Apagar
          </Button>
        </Modal.Footer>
      </Modal>

      <Button variant="danger " onClick={handleShow}>
        <RiDeleteBinLine size={20} />
      </Button>
    </>
  );
}

export default ModaleApagar;
