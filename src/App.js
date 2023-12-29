import { ToastContainer } from "react-toastify";
import AppRouter from "./router/AppRouter";
import MovieContextProvider from "./context/MovieContext";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <MovieContextProvider>
        <AppRouter />
        <ToastContainer />
      </MovieContextProvider>
    </AuthProvider>
  );
}

export default App;
