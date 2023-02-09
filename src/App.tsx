import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./context/language";
import { AppThemeProvider } from "./context/theme";
import AppRoutes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <AppThemeProvider>
          <AppRoutes />
        </AppThemeProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
