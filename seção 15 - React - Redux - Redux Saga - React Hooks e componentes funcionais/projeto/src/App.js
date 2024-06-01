import Login from "./pages/Login";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import Routes from "./routes";
import { Router } from "react-router-dom";
import history from "./services/history";
import { ToastContainer } from "react-toastify";

//O Toastfy serve para exibir as mensagens de erro e sucesso do sistema

function App() {
  return (

    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyles />
      <ToastContainer autoClose={3000} className={"toast-container"} />
    </Router>

  )
}

export default App;
