import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// components
import Header from "./components/header/Header";
import Tab from "./components/tab/Tab";
import Features from "./components/features/Fetures";

function App() {
  const tabs = ["About us", "All in one", " Our partners", "Contact us"];
  return (
    <div className="App">
      <Header />
      <Tab tabs={tabs} defaultTab="All in one" />
      <Features />
    </div>
  );
}

export default App;
