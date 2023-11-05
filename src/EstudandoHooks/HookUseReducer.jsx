import React, { useContext, useReducer } from "react";
import { ThemeContext } from "../App";

function reducer(estado, action) {
   switch (action.type) {
      case "aumentar":
         return { ...estado, count: estado.count + 1 };
      case "mostrarTexto":
         return { ...estado, showText: !estado.showText };
      default:
         return estado;
   }
}

const HookUseReducer = () => {
   const { theme, themeDispatch } = useContext(ThemeContext);

   const [estado, dispatch] = useReducer(reducer, {
      count: 0,
      showText: true,
   });

   function handleClick() {
      dispatch({ type: "aumentar" });
      dispatch({ type: "mostrarTexto" });
   }

   return (
      <div >
         <h1>Vite + React</h1>
         <div className="card">
            <button onClick={handleClick}>count is {estado.count}</button>
            {estado.showText === true && <p>Estou aqui</p>}
         </div>

         <button
            onClick={() => {
               themeDispatch({ type: "Light" });
            }}
         >
            Modo light
         </button>
         <button
            onClick={() => {
               themeDispatch({ type: "Dark" });
            }}
         >
            Modo Dark
         </button>
      </div>
   );
};

export default HookUseReducer;
