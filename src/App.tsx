import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./context/language";
import { AppThemeProvider } from "./context/theme";
import { Provider } from "react-redux";
import AppRoutes from "./routes";
import store from "./store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <LanguageProvider>
          <AppThemeProvider>
            <AppRoutes />
          </AppThemeProvider>
        </LanguageProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
