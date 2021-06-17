import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../src/Pages/Home";
import { Provider } from "react-redux";
import { store, persistor } from "../src/store";
import { PersistGate } from "redux-persist/integration/react";
import CadastroCliente from "../src/Pages/CadastroCliente/index";
import CadastroTitulo from "../src/Pages/CadastroTitulo/index";
import Relatorios from "../src/Pages/Relatorios/index";
import Login from "../src/Pages/Login/index";
import UpdatePessoas from "../src/Componentes/UpdatePessoas/index";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Route exact path="/" component={Login} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/CadastroCliente" component={CadastroCliente} />
          <Route exact path="/CadastroTitulo" component={CadastroTitulo} />
          <Route exact path="/Relatorios" component={Relatorios} />
          <Route exact path="/UpdatePessoas" component={UpdatePessoas} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
