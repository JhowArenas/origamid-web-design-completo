import React from "react";
import Produto from "./Produto";

const App = () => {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem("produto");
    produtoLocal != null && setProduto(produtoLocal);
  }, []);

  React.useEffect(() => {
    produto != null && window.localStorage.setItem("produto", produto);
  }, [produto]);

  const handleClick = async ({ target }) => {
    setProduto(target.innerText);

    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${target.innerText}`
    );
    const json = await response.json();
    console.log(json);
  };

  return (
    <div>
      <h1>Preferência: {produto}</h1>
      <button style={{ marginRight: "1rem" }} onClick={handleClick}>
        notebook
      </button>
      <button onClick={handleClick}>smartphone</button>
      {produto && <Produto produto={produto} />}
    </div>
  );
};

export default App;
