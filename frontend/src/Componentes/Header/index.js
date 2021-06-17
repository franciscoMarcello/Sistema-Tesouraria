import React from "react";
import "./Header.css";
import { ImExit } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import GICAT from "../../Assets/GICAT.png";

function Header() {
  const dispatch = useDispatch();
  const usuarioName = useSelector(state => state.usuarioName);
  return (
    <div className="header  d-flex  align-items-center">
      <div className="logo">
        <img src={GICAT} alt="Logo" width="90" height="60" />
      </div>
      <div className="sair">
        <p className="nome me-5 mt-2">{usuarioName}</p>
        <button className="btn " onClick={() => dispatch({ type: "LOG_OUT" })}>
          <ImExit size={30} color="white" />
        </button>
      </div>
    </div>
  );
}
export default Header;
