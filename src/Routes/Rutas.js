import { Routes, Route, Link } from "react-router-dom";
import { Home } from "../Home/Home";
import { Menu } from "../Menu/Menu";
import { Habitaciones } from "../Habitaciones/Habitaciones";
import { Contact } from "../Contact/Contact";

export function Rutas(){
    return (
        <div className="App">
          <Menu></Menu>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="habitaciones" element={<Habitaciones/>}/>
            <Route path="Contact" element={<Contact/>}/>
          </Routes>
        </div>
      );
}