import { Routes, Route, Link } from "react-router-dom";
import { Home } from "../Home/Home";
import { Menu } from "../Menu/Menu";


export function Rutas(){
    return (
        <div className="App">
          <Menu></Menu>
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
        </div>
      );
}