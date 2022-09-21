import { useState } from "react"
import { servicioReserva } from "../services/ServicioReserva/ServicioReserva.js"
export function Formularioreserva(){

    const[entrada,setentrada]=useState("")
    const[salida,setsalida]=useState("")
    const[ninos,setninos]=useState("")
    const[adultos,setadultos]=useState("")
    function EnvioFormulario(evento){
        evento.preventDefault()
       let data={
        
            "idHabitacion" : "6321ef745a1931ff38e7c2c3",
            "fechaEntrada":entrada,
            "fechaSalida": salida,
            "numeroNinos": adultos,
            "numeroAdultos": ninos
          
       }
    }
    return (   
        <>
        <form className="" onSubmit={EnvioFormulario}>
            <div className="row">
                <div className="col-12 col-md-8 text-white">
                <h3>RESERVA CON NOSOTROS</h3>
                <h5>Reserva ya y disfruta!!!</h5>
                <hr></hr>
                </div>
            </div>
            <div className="row text-white fw-bold">
                <div className="col-12 col-md-4">
                <label for="basic-url" class="form-label">Fecha Entrada</label>
                <div class="input-group mb-3">
                <span class="input-group-text"><i class="bi bi-calendar-check"></i></span>
                <input 
                type="date" 
                class="form-control" 
                placeholder="Username"
                 //Sirve para cambiar el valor de la caja del formulario
                onChange={(evento)=>{
                setentrada(evento.target.value)
                }} 
                value={entrada}     
                />
                
                </div>
                </div>
                <div className="col-12 col-md-4">
                <label for="basic-url" class="form-label">Fecha Salida</label>
                <div class="input-group mb-3">
                <span class="input-group-text"><i class="bi bi-calendar-check"></i></span>
                <input
                type="date" 
                class="form-control" 
                placeholder="Username"
                onChange={(evento)=>{
                setsalida(evento.target.value)
                }} 
                value={salida}    
                />
                </div>
                </div>
            </div>
            <div className="row text-white fw-bold">
            <div className="col-12 col-md-4">
                <label for="basic-url" class="form-label">Numero Adultos</label>
                <div class="input-group mb-3">
                <span class="input-group-text"><i class="bi bi-people-fill"></i></span>
                               
                <select 
                className="form-select" 
                aria-label="Default select example"
                  onChange={(evento)=>{
                    setadultos(evento.target.value)
                    }} 
                    value={adultos}
                    defaultValue="0"   
                >
                <option selected>Escoge la opción:</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                </select>
                </div>
                </div>
                <div className="col-12 col-md-4">
                <label for="basic-url" class="form-label">Numero niños</label>
                <div class="input-group mb-3">
                <span class="input-group-text"><i class="bi bi-people-fill"></i></span>
                <select 
                className="form-select" 
                aria-label="Default select example"
                 onChange={(evento)=>{
                    setninos(evento.target.value)
                    }} 
                    value={ninos}
                    defaultValue="0"
                >
                <option selected>Escoge la opción:</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                </select>
                </div>
                </div>
            </div>
            <button type="submit" class="btn btn-info btn btn-outline-dark w-50 ms-5" >RESERVAR</button>
        </form>
        </>
        )
}