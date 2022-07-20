import "./App.css";
import Navbar from "./components/Navbar";
import QuickAcces from "./components/QuickAcces";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
