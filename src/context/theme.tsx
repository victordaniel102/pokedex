import { ThemeProvider } from "styled-components";
import { createContext, ReactNode, useState } from "react";

export interface ITheme {
  primary?: string;
  primaryVariant?: string;
  onPrimary?: string;
  secondary?: string;
  onSecondary?: string;
  background?: string;
  onBackground?: string;
  tertiary?: string;
  card?: string;
  boxShadow?: string;
  borderRadius?: string;
  error?: string;
}

const light: ITheme = {
  background: "#F9F9F9",
  card: "#FFF",
  onBackground: "#262626",
  primary: "#005ae2",
  primaryVariant: "#ca00eb",
  secondary: "#00255C",
  onPrimary: "#FFF",
  tertiary: "#A8A8A8",
  error: "#ee2d2d",
};

const dark: ITheme = {
  background: "#1b1b1b",
  card: "#252525",
  onBackground: "#ffffff",
  primary: "#468EFA",
  primaryVariant: "#ca00eb",
  secondary: "#cadfff",
  onPrimary: "#FFF",
  tertiary: "#686868",
  error: "#ee2d2d",
};

type AppThemeProviderProps = {
  children: ReactNode;
};

type AppThemeContextType = {
  toggleTheme: () => void;
  selectedTheme: string;
};

const AppThemeContext = createContext<Partial<AppThemeContextType>>({});

function AppThemeProvider({ children }: AppThemeProviderProps) {
  const [selectedTheme, setSelectedTheme] = useState<string>("light");

  const getTheme = (theme: string) => {
    return theme == "light" ? light : dark;
  };

  const toggleTheme = () => {
    setSelectedTheme(selectedTheme == "light" ? "dark" : "light");
  };

  return (
    <AppThemeContext.Provider value={{ toggleTheme, selectedTheme }}>
      <ThemeProvider theme={getTheme(selectedTheme)}>{children}</ThemeProvider>
    </AppThemeContext.Provider>
  );
}

export { AppThemeContext, AppThemeProvider };
