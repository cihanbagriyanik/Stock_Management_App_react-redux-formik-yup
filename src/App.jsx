import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import store, { persistor } from "./app/store";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#454F5B",
      },
      secondary: {
        main: "#454F5B",
        second: "#161C24",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AppRouter />
          </PersistGate>
        </Provider>
        <ToastContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
