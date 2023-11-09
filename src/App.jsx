import { createContext, useEffect, useReducer, useState } from "react";
import "./App.css";
import HookUseReducer from "./EstudandoHooks/HookUseReducer";
import HookUseCallback from "./EstudandoHooks/HookUseCallback";

export const ThemeContext = createContext();

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

function App() {
   const [theme, themeDispatch] = useReducer(ThemeReducer, {
      theme: "white",
      color: "black",
   });

   return (
      <div className="App" style={{ backgroundColor: theme.theme, color: theme.color }}>
         <ThemeContext.Provider value={{ theme, themeDispatch }}>
            {/*Use Reducer*/}
            <HookUseReducer />

            {/*UseCallback */}
            <HookUseCallback />
         </ThemeContext.Provider>
      </div>
   );
}

export default App;
