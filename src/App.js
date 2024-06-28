import "./App.css";
import PrimarySearchAppBar from "./components/PrimarySearchAppBar";

import Footer from "./components/Footer";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Mainscreen from "./Screens/Mainscreen";
import Aboutscreen from "./Screens/Aboutscreen";
import Shop from "./Screens/Shop";
import Joinusscreen from "./Screens/Joinusscreen";
import Applyform from "./Screens/Applyform";
import ExampleExcersise from "./Screens/Example";


function App() {
  return (
    <div className="App">
      <header>
        <PrimarySearchAppBar></PrimarySearchAppBar>
      </header>

      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Mainscreen />}></Route>
          <Route exact path="/home" element={<Mainscreen />}></Route>
          <Route exact path="/about" element={<Aboutscreen />}></Route>
          <Route exact path="/shop" element={<Shop />}></Route>
          <Route exact path="/joinus" element={<Joinusscreen />}></Route>
          <Route exact path="/apply" element={<Applyform />}></Route>
          <Route exact path="/moment" element={<ExampleExcersise />}></Route>
        </Routes>
      </BrowserRouter>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
