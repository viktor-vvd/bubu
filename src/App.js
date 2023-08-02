import "./App.css";
import "./styles/index.css";
import Auth from "./components/Auth/Auth";
import Header from "./components/common/Header";
import Home from "./components/Home/Home";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div className="App">
      {/* <Auth/> */}
      <Header/>
      <main className="container-vertical content-container">
        <Home/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
