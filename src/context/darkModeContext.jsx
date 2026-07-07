import { createContext, useState, useContext } from "react"

export const DarkModeContext = createContext()

export const DarkModeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("darkMode") === "true"
  )

  const toggleDarkMode = () => {
    const newValue = !isDark
    setIsDark(newValue)
    localStorage.setItem("darkMode", newValue)
  }

  return (
    <DarkModeContext.Provider value={{ isDark, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export const useDarkMode = () => useContext(DarkModeContext)