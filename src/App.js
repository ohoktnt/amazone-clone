import "./App.css";
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    // BEM convention for CSS
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;
