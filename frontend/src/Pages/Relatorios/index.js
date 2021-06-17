import React, { useState, useEffect } from "react";
import "./relatorio.css";
import Axios from "axios";
import Footer from "../../Componentes/Footer/index";
import Header from "../../Componentes/Header/index";
import Menu from "../../Componentes/Menu/index";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
function Relatorios() {
  const [relatorio, setRelatorio] = useState([]);
  const [mesPesquisa, setMesPesquisa] = useState("");
  const [anoMensal, setAnoMensal] = useState("");

  const history = useHistory();

  useEffect(() => {
    Axios.get("http://localhost:3001/api/relatorios").then(response => {
      setRelatorio(response.data);
    });
  }, []);

  function Pesquisar() {
    Axios.post("http://localhost:3001/api/relatorios/mensal", {
      data: mesPesquisa,
      data2: anoMensal,
    })
      .then(response => {
        setRelatorio(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  return (
    <div id="app">
      <Header />
      <Menu />
      <div className="content formulario">
        {useSelector(state => state.usuarioLogado) === 0
          ? history.push("/")
          : null}
        <div className="row py-2 pesquisa">
          <div className="col-2">
            <label>Data inicial</label>
            <input
              className="form-control"
              type="date"
              onChange={e => setMesPesquisa(e.target.value)}
            />

            <label>Data final</label>
            <input
              className="form-control"
              type="date"
              onChange={e => setAnoMensal(e.target.value)}
            />
          </div>

          <div className="col-2 button-pesquisa">
            <button className="btn btn-success " onClick={Pesquisar}>
              Pesquisar
            </button>
          </div>
        </div>
        <div className="table-responsive relatorio-table" id="sailorTableArea">
          <table
            id="sailorTable"
            className="table  table-striped table-bordered"
            width="100%"
          >
            <thead>
              <tr>
                <th className="">Codigo pessoa</th>
                <th className="">Valor titulo</th>
                <th className="">Tipo de Conta</th>
                <th className="">Descrição</th>
                <th>Vencimento</th>
                <th>Pagamento</th>
              </tr>
            </thead>
            {relatorio.map(val => {
              return (
                <tbody>
                  <tr>
                    <td className="">{val.cod_pessoa}</td>
                    <td className="">R$ {val.valor_titulo.toFixed(2)}</td>
                    <td className="">{val.tipo_conta}</td>
                    <td className="">{val.tipo_negocio}</td>
                    <td className="">{val.data_vencimento}</td>
                    <td className="">{val.data_pagamento}</td>
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
export default Relatorios;
