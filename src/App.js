import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import HeaderMenu from "./client/headerMenu/HeaderMenu";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <HeaderMenu/>
      <Routes/>
    </div>
    </BrowserRouter>
  );
}

export default App;
