import React, { useCallback, useState } from "react";
import List from "../components/List";

const HookUseCallback = () => {
   const [contador, setContador] = useState(0);

   // Com problema
   const apanharDadosComProblema = () => [1, 2, 3, 4, 5, 6];

   //  Utilizando callback para evitar re-renderização da função
   const apanharDados = useCallback(() => [1, 2, 3, 4, 5, 6], []);

   return (
      <div>
         <h2>HookUseCallback</h2>
         <button onClick={() => setContador(contador + 1)}>Alterar</button>
         <p>{contador}</p>
         <List dados={apanharDados} />
      </div>
   );
};

export default HookUseCallback;
