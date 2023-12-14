import React, { useEffect, useState } from "react";

const List = ({ dados }) => {
   const [meusItems, setMeusItems] = useState([]);

   useEffect(() => {
      console.log("Buscando items...");
      setMeusItems(dados);
   }, [dados]);

   return <ul>  {meusItems && meusItems.map((v, k) => <li key={k}>{v}</li>)}</ul>;
};

export default List;
