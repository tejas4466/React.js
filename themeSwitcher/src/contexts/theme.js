//more easier syntax for production sara kam ek file me

import { createContext, useContext } from "react";

//default value can be given in createContext
//jab context bnega tho initial ho state hogi usko value de skte he
export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

//custom hook
export default function useTheme() {
  return useContext(ThemeContext);
}
