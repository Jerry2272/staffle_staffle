import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home"; 
import About from "./page/About";
import Programme from "./page/Programmes";


 

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes> 
             <Route  path="/" element={<Home />} />
             <Route  path="/about" element={<About />} />
             <Route  path="/program" element={<Programme />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
