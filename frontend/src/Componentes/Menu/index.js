import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
import { ImHome } from "react-icons/im";
import { FaUserCheck } from "react-icons/fa";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";

function Menu() {
  return (
    <aside className="menu text-white">
      <div className="links-navegacao text-center">
        <Link to="/Home">
          <ImHome size={30} color="white" />
        </Link>
      </div>
      <div className="links-navegacao text-center">
        <Link to="/CadastroTitulo">
          <FaMoneyCheckAlt size={30} color="white" />
        </Link>
      </div>

      <div className="links-navegacao text-center">
        <Link to="/CadastroCliente">
          <FaUserCheck size={30} color="white" />
        </Link>
      </div>
      <div className="links-navegacao text-center">
        <Link to="/Relatorios">
          <IoDocumentTextSharp size={30} color="white" />
        </Link>
      </div>
    </aside>
  );
}

export default Menu;
