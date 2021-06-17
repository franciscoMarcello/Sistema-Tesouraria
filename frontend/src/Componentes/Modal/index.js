import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { FaUserEdit } from "react-icons/fa";
import InputMask from "react-input-mask";
import Axios from "axios";
function Modale(id) {
  const [show, setShow] = useState(false);
  const [nome, setNome] = useState("");
  const [cnpj_cpf, setCnpj_cpf] = useState("");
  const [bairro, setBairro] = useState("");
  const [cep, setCep] = useState("");
  const [numero, setNumero] = useState("");
  const [tipo_pessoa, setTipo_pessoa] = useState("");
  const [contato, setContato] = useState("");
  const [email, setEmail] = useState("");
  const [tipo_cliente, setTipo_cliente] = useState("");
  const [listPessoas, setListPessoas] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/pessoas").then(response => {
      setListPessoas(response.data);
    });
  }, []);

  const updatePessoas = id => {
    console.log(id);
    Axios.put("http://localhost:3001/api/update/pessoas", {
      nome: nome,
      id: id,
    })
      .then(response => {
        alert("Alterou");
        setShow(false);
      })
      .catch(erro => {
        console.log(erro);
      });
  };

  return (
    <>
      {listPessoas.map(val => {
        return (
          <Modal show={show} onHide={handleClose}>
            <Modal.Header className="bg-info text-white">
              <Modal.Title>Alterar Dados</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="row">
                <div className="col-6 mb-2">
                  <label>Tipo de pessoas</label>
                  <select
                    className="form-control"
                    aria-label="Default select example"
                    onChange={e => setTipo_pessoa(e.target.value)}
                  >
                    <option selected>Tipo de Pessoa</option>
                    <option value="fisica">Pessoa Física</option>
                    <option value="juridica">Pessoa juridica</option>
                  </select>
                  <label>Tipo de Cliente</label>
                  <select
                    className="form-control"
                    aria-label="Default select example"
                    onChange={e => setTipo_cliente(e.target.value)}
                  >
                    <option selected>Tipo de Cliente</option>
                    <option value="Cliente">Cliente</option>
                    <option value="Fornecedor">Fornecedor</option>
                  </select>
                </div>
                <div className="col-6 mb-2">
                  <label>CPF/CNPJ</label>
                  <input
                    type="text"
                    className="form-control "
                    onChange={e => setCnpj_cpf(e.target.value)}
                  />

                  <label>Nome</label>
                  <input
                    type="text"
                    className="form-control "
                    onChange={e => setNome(e.target.value)}
                  />
                </div>
                <div className="col-6 mb-2">
                  <label>Contato</label>
                  <InputMask
                    mask="(99)99999-9999"
                    type="tel"
                    className="form-control"
                    onChange={e => setContato(e.target.value)}
                  />
                  <label>CEP</label>
                  <InputMask
                    mask="99999-999"
                    type="text"
                    className="form-control"
                    onChange={e => setCep(e.target.value)}
                  />
                </div>
                <div className="col-6 mb-2">
                  <label>Bairro</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={e => setBairro(e.target.value)}
                  />

                  <label>Número</label>
                  <input
                    type="number"
                    className="form-control"
                    onChange={e => setNumero(e.target.value)}
                  />
                </div>
                <div className="col-12">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer className="bg-info ">
              <Button variant="danger " onClick={handleClose}>
                Cancelar
              </Button>
              <Button
                variant="light"
                onClick={() => {
                  updatePessoas(id);
                }}
              >
                Salvar
              </Button>
            </Modal.Footer>
          </Modal>
        );
      })}

      <Button variant="primary" onClick={handleShow}>
        <FaUserEdit size={20} />
      </Button>
    </>
  );
}

export default Modale;
