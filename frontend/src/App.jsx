import React from "react";
import { Routes, Route } from "react-router-dom";
// TODO: import páginas reais
import Dashboard from "./pages/Dashboard";
import EmpresaCadastro from "./pages/EmpresaCadastro";
import LayoutConfig from "./pages/LayoutConfig";
import Importacao from "./pages/Importacao";
import Lotes from "./pages/Lotes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/empresa" element={<EmpresaCadastro />} />
      <Route path="/layout" element={<LayoutConfig />} />
      <Route path="/importacao" element={<Importacao />} />
      <Route path="/lotes" element={<Lotes />} />
      {/* Outras rotas */}
    </Routes>
  );
}

export default App;
