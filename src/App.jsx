import { createContext, useEffect, useReducer, useState } from "react";
import "./App.css";
import HookUseReducer from "./EstudandoHooks/HookUseReducer";

export const ThemeContext = createContext();

function App() {
   const ThemeReducer = (state, action) => {
      switch (action.type) {
         case "Light":
            return { theme: "white", color: "black" };
         case "Dark":
            return { theme: "black", color: "white" };
         default:
            return state;
      }
   };

   const [theme, themeDispatch] = useReducer(ThemeReducer, {
      theme: "white",
      color: "black",
   });

   return (
      <div className="App" style={{ backgroundColor: theme.theme, color: theme.color }}>
         <ThemeContext.Provider value={{ theme, themeDispatch }}>
            {/*Use Reducer*/}
            <HookUseReducer />
         </ThemeContext.Provider>
      </div>
   );
}

export default App;
