import React, { useEffect, useMemo, useState } from "react";

const HookUseMemo = () => {
   //  Errado
   const numeros_premiados_errado = [0, 100, 200];

   //   Recebendo o valor somente uma vez
   const numeros_premiados = useMemo(() => [0, 100, 200], []);

   const [numero, setNumero] = useState(0);

   useEffect(() => {
      console.log("Números premiados foram alterados");
   }, [numeros_premiados]);

   return (
      <div>
         <h2>HookUseMemo</h2>
         <input onChange={(e) => setNumero(e.target.value)} type="number" />
         <p>{numero}</p>
      </div>
   );
};

export default HookUseMemo;
