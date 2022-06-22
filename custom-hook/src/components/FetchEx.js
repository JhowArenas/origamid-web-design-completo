import React from "react";
import useFetch from "./useFetch";

const App = () => {
  const [data, loading, error, request] = useFetch();

  React.useEffect(() => {
    request(`https://ranekapi.origamid.dev/json/api/produto/notebook`);
  }, [request]);

  if (error) return <p>{error}</p>;
  if (loading) return <p>Carregando...</p>;
  if (data)
    return (
      <>
        <h2>Fetch - Custom Hooks Exemple</h2>
        <div>{data.nome}</div>
      </>
    );
  else return null;
};

export default App;
