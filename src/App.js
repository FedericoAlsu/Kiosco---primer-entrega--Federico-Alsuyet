import {BrowserRouter,Routes,Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/NavBar.js";
import ItemDetailContainer from "./components/itemDetailContainer.js";
import ItemListContainer from "./components/itemListContainer.js";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer />}/>
        <Route exact path="/item/:itemId" element={<ItemDetailContainer />}/>
        <Route exact path="/category/:id" element={<ItemListContainer />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
