import React from "react";
import { GlobalContext } from "./GlobalContext";

const Produto = () => {
  const global = React.useContext(GlobalContext);
  console.log(global.dados);
  if(global.dados === null || global.dados === 0) return null
  return (
    <div>
      <h1>Produtos</h1>
      {global.dados.map((produto) => (
        <li key={produto.id}>
            {produto.nome} - {produto.preco}
            {produto.descricao}
        </li>
      ))}
    </div>
  );
};

export default Produto;
