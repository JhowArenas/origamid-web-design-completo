import React from "react";
import useLocalStorage from "./useLocalStorage";

const LSEx = () => {
  const [produto, setProduto] = useLocalStorage("produtos", []);

  function handleClick({target}){
    setProduto(target.innerText);
  }

  return (
    <>
    <h1>Local Storage - Custom Hooks Exemple </h1>
    <div>
      <p>Prefirido: {produto}</p>
      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Smartphone</button>
    </div>
    </>
  );
};

export default LSEx;