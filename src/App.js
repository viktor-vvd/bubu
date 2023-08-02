import "./App.css";
import "./styles/index.css";
import AppRouter from "./AppRouter";
import Auth from "./components/Auth/Auth";
import Header from "./components/common/Header";
import Home from "./components/Home/Home";
import Footer from "./components/common/Footer";
import { useLocation } from "react-router-dom";

function App() {
  function AuthPageCheck() {
    const location = useLocation();
    return !location.pathname.includes("auth");
  }
  return (
    <div className="App">
      {AuthPageCheck() && <Header />}
      <main
        className={
          "container-vertical main-container" +
          (AuthPageCheck() ? " content-container" : "")
        }
      >
        <AppRouter />
      </main>
      {AuthPageCheck() && <Footer />}
    </div>
  );
}

export default App;
