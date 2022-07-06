import "./App.css";
import { Routes, Route } from "react-router-dom";
import BackEnd from "./Component/BackEnd/Backend";
import FrontEnd from "./Component/FrontEnd/FrontEnd";
import Table from "./Component/BackEnd/Screens/Table";
import Data from "./Component/BackEnd/Screens/d";
import Home from "./Component/FrontEnd/Screens/Home";
import About from "./Component/FrontEnd/Screens/About";

function App() {
  return (
    <div className="container-fluid">
      <Routes>
        <Route path="/" element={<FrontEnd />}>
            <Route index element={<Home/>}/>
            <Route path="about"  element={<About/>}/>
        </Route>

        <Route path="/admin" element={<BackEnd />}>
          <Route index element={<Table />} />
          <Route path="data" element={<Data />} />
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
