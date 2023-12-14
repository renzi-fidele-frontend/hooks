import { createContext, useReducer } from "react";
import "./App.css";
import HookUseCallback from "./EstudandoHooks/HookUseCallback";
import HookUseMemo from "./EstudandoHooks/HookUseMemo";

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
            {/*UseReducer*/}

            {/*UseCallback */}

            {/*UseMemo */}
            <HookUseMemo />
         </ThemeContext.Provider>
      </div>
   );
}

export default App;
