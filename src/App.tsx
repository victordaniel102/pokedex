import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./context/language";
import { AppThemeProvider } from "./context/theme";
import { Provider } from "react-redux";
import AppRoutes from "./routes";
import store from "./store";
import { ToastProvider } from "./context/toast";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <LanguageProvider>
          <ToastProvider>
            <AppThemeProvider>
              <AppRoutes />
            </AppThemeProvider>
          </ToastProvider>
        </LanguageProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
