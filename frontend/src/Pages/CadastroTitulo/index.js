import React, { useState, useEffect } from "react";
import "./CadastroTitulo.css";
import Axios from "axios";
import Footer from "../../Componentes/Footer/index";
import Header from "../../Componentes/Header/index";
import Menu from "../../Componentes/Menu/index";
import { AiFillEdit } from "react-icons/ai";
import InputMask from "react-input-mask";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function CadastroTitulo() {
  const [valor, setValor] = useState("");
  const [tipo_conta, setTipo_conta] = useState("");
  const [vencimento, setVencimento] = useState("");
  const [pagamento, setPagamento] = useState("");
  const [cod_pessoa, setCod_pessoa] = useState("");
  const [quant_parcelas, setParcelas] = useState("");
  const [tipo_negocio, setTipo_negocio] = useState("");
  const [menssagem, setMenssagem] = useState("");
  const [pesquisa, setPesquisa] = useState("");

  const history = useHistory();

  const [listtitulos, setListTitulos] = useState([]);

  const valorFormatado = parseFloat(valor).toFixed(2);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/financeiro").then(response => {
      setListTitulos(response.data);
    });
  }, []);

  const atualizandoData = cod_conta => {
    Axios.put(`http://localhost:3001/api/update/financeiro/${cod_conta}`, {
      data_pagamento: pagamento,
    }).then(response => {
      setMenssagem(response.data.message);
    });
  };
  function Pesquisa() {
    if (pesquisa === "") {
      setMenssagem("campo de pesquisa vazio");
    } else {
      Axios.post("http://localhost:3001/api/pesquisa/financeiro", {
        cod_pessoa: pesquisa,
      }).then(response => {
        setListTitulos(response.data);
        console.log(response.data);
      });
    }
  }

  const cadastrar = () => {
    Axios.post("http://localhost:3001/api/financeiro", {
      tipo_conta: tipo_conta,
      tipo_negocio: tipo_negocio,
      data_pagamento: pagamento,
      quant_parcelas: quant_parcelas,
      valor_titulo: valor,
      data_vencimento: vencimento,
      cod_pessoa: cod_pessoa,
    })
      .then(response => {
        setMenssagem(response.data.message);
      })
      .catch(err => {
        setMenssagem(err.data.message);
      });
  };
  return (
    <div id="app">
      <Header />
      <Menu />
      <div className="content formulario">
        {useSelector(state => state.usuarioLogado) === 0
          ? history.push("/")
          : null}
        <div className="row ">
          <div className="col-6">
            <label>Tipo da conta</label>
            <select
              className="form-control"
              onChange={e => setTipo_conta(e.target.value)}
            >
              <option selected>Tipo de Conta</option>
              <option value="A pagar">A pagar</option>
              <option value="A receber">A receber</option>
            </select>
            <label>Parcelas</label>
            <select
              className="form-control"
              onChange={e => setParcelas(e.target.value)}
            >
              <option selected value="-">
                Parcelas
              </option>
              <option value="1x">
                1x R$ {(valorFormatado / 1).toFixed(2)}
              </option>
              <option value="2x">
                2x R$ {(valorFormatado / 2).toFixed(2)}
              </option>
              <option value="3x">
                3x R$ {(valorFormatado / 3).toFixed(2)}
              </option>
              <option value="4x">
                4x R$ {(valorFormatado / 4).toFixed(2)}
              </option>
              <option value="5x">
                5x R$ {(valorFormatado / 5).toFixed(2)}
              </option>
              <option value="6x">
                6x R$ {(valorFormatado / 6).toFixed(2)}
              </option>
              <option value="7x">
                7x R$ {(valorFormatado / 7).toFixed(2)}
              </option>
              <option value="8x">
                8x R$ {(valorFormatado / 8).toFixed(2)}
              </option>
              <option value="9x">
                9x R$ {(valorFormatado / 9).toFixed(2)}
              </option>
              <option value="10x">
                10x R$ {(valorFormatado / 10).toFixed(2)}
              </option>
              <option value="11x">
                11x R$ {(valorFormatado / 11).toFixed(2)}
              </option>
              <option value="12x">
                12x R$ {(valorFormatado / 12).toFixed(2)}
              </option>
            </select>
          </div>
          <div className="col-6">
            <label>Valor</label>
            <input
              type="text"
              className="form-control "
              onChange={e => setValor(e.target.value)}
            />
            <div>
              <label>Tipo</label>
              <select
                className="form-control"
                onChange={e => setTipo_negocio(e.target.value)}
              >
                <option selected>Tipo</option>
                <option value="Consumo">Consumo</option>
                <option value="Revenda">Revenda</option>
                <option value="Patrimonio">Patrimonio</option>
                <option value="Recebimento">Recebimento</option>
                <option value="Vendas">Vendas</option>
                <option value="Prestação de serviços">
                  Prestação de serviços
                </option>
                <option value="Outros">Outros</option>
              </select>
            </div>
          </div>

          <div className="col-6">
            <label>Codigo da pessoa</label>
            <input
              type="text"
              className="form-control "
              onChange={e => setCod_pessoa(e.target.value)}
            />
          </div>
          <div className="col-6">
            <label>Vencimento</label>
            <InputMask
              mask="9999/99/99"
              type="text"
              className="form-control "
              onChange={e => setVencimento(e.target.value)}
            />
          </div>
          <div className="col-12">
            <label>Pagamento</label>
            <InputMask
              mask="9999/99/99"
              type="text"
              className="form-control"
              onChange={e => setPagamento(e.target.value)}
            />
          </div>
        </div>

        <div className="button-cadastrar">
          <button onClick={cadastrar} className="mt-2">
            Cadastrar
          </button>
        </div>

        <div className="col-6">
          <div>
            <label>Conta da Conta</label>
            <InputMask
              type="text"
              className="form-control"
              onChange={e => setPesquisa(e.target.value)}
            />
          </div>
          <div>
            <button className="btn btn-primary my-2 " onClick={Pesquisa}>
              Pesquisar
            </button>
          </div>
        </div>
        <div className=" mensagem mb-3">
          <p className=" text-center">{menssagem}</p>
        </div>
        <div className="table-responsive" id="sailorTableArea">
          <table
            id="sailorTable"
            className="table table-striped table-bordered"
            width="100%"
          >
            <thead>
              <tr>
                <th className="tableId">Id</th>
                <th>Tipo da conta</th>
                <th>Codigo da conta</th>
                <th>Tipo</th>
                <th>Valor Titulo</th>
                <th>Quantidade parcelas</th>
                <th>Vencimento</th>
                <th>Pagamento</th>
                <th className="acoes">Ações</th>
              </tr>
            </thead>

            {listtitulos.map(val => {
              return (
                <tbody>
                  <tr>
                    <td className="tableId">{val.cod_conta}</td>
                    <td>{val.tipo_conta}</td>
                    <td>{val.cod_pessoa}</td>
                    <td>{val.tipo_negocio}</td>
                    <td>R$ {val.valor_titulo.toFixed(2)}</td>
                    <td>{val.quant_parcelas}</td>
                    <td>{val.data_vencimento}</td>
                    <td>{val.data_pagamento}</td>
                    <th className="acoes">
                      <div>
                        <button
                          onClick={() => {
                            atualizandoData(val.cod_conta);
                          }}
                          className="btn btn-primary"
                        >
                          <AiFillEdit size={20} />
                        </button>
                      </div>
                    </th>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default CadastroTitulo;
