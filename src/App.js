import "./App.css";
import "./styles/index.css";
import AppRouter from "./AppRouter";
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";
import { useLocation } from "react-router-dom";

function App() {
  function AuthPageCheck() {
    const location = useLocation();
    return !location.pathname.includes("auth");
  }
  return (
    <div className="App">
      {AuthPageCheck() && <Header />}
      <div
        className={
          "container-vertical main-container" +
          (AuthPageCheck() ? " content-container" : "")
        }
      >
        <AppRouter />
      </div>
      {AuthPageCheck() && <Footer />}
    </div>
  );
}

export default App;
