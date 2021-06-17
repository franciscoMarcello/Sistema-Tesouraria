import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../../Componentes/Footer/index";
import Header from "../../Componentes/Header/index";
import Menu from "../../Componentes/Menu/index";
import Axios from "axios";
import { useSelector } from "react-redux";
import "./home.css";
function Home() {
  const [listContasAvencer, setListContasAvencer] = useState([]);

  const history = useHistory();

  useEffect(() => {
    Axios.get("http://localhost:3001/api/pesquisa/home").then(response => {
      setListContasAvencer(response.data);
    });
  }, []);
  return (
    <div id="app">
      <Header />
      <Menu />
      <div className="text-center text-danger p-2">
        {useSelector(state => state.usuarioLogado) === 0
          ? history.push("/")
          : null}
        <h2>Contas a vencer</h2>
        <div>
          <div
            className="table-responsive relatorio-table"
            id="sailorTableArea"
          >
            <table
              id="sailorTable"
              className="table  table-striped table-bordered"
              width="100%"
            >
              <thead>
                <tr>
                  <th className="">Codigo da conta</th>
                  <th className="">Valor titulo</th>
                  <th className="">Tipo de Conta</th>
                  <th className="">Descrição</th>
                  <th>Vencimento</th>
                  <th>Pagamento</th>
                </tr>
              </thead>
              {listContasAvencer.map(val => {
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
      </div>

      <Footer />
    </div>
  );
}
export default Home;
