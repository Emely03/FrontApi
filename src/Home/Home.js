import "./Home.css";
import { Formularioreserva } from "../Formularioreserva/Formularioreserva.js";
import { Actividades } from "../Actividades/Actividades";
import { Footer } from "../Footer/Footer";
import { ServicioHabitacion } from "../services/ServicioHabitacion/ServicioHabitacion.js";
import { useEffect, useState } from "react"; //HOOKS
import Swal from 'sweetalert2'

export function Home() {
  const [estadoCarga, setEstadoCarga] = useState(true);
  const [habitaciones, setHabitacion] = useState(null); //variable global para almacenar la consulta de habitaciones
  const [idhabitaciones, setidHabitacion] = useState(""); //Para almacenar el id
  //USANDO EL USEEFECT
  //Funcion que controla el render(vista, lo que pinta) de un componente

  useEffect(function () {
    ServicioHabitacion().then(function (respuesta) {
      setHabitacion(respuesta);
      setEstadoCarga(false);
      console.log(respuesta);
    });
  }, []);

  if (estadoCarga) {
    return (
      <>
        <h1>Estoy trabajando...</h1>
      </>
    );
  } else {
    return (
      <>
        <div className="banner">
          <Formularioreserva idhabitacionSelecionada={idhabitaciones}>

          </Formularioreserva>
        </div>
        <div>
          <Actividades></Actividades>
        </div>
        <div className="mt-5">
          <div className="container-fluid my-5">
            <div className="row">
              <div className="col-12">
                <h1 className="text-center">Habitaciones </h1>
                <h2 className="text-center">Animate y visitanos!!</h2>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-4 g-2">
              {habitaciones.datos.map(function (habitacion) {
                return (
                  <>
                    <div className="col">
                      <div className="card h-100">
                        <img
                          src={habitacion.imagenes[0]}
                          alt="img"
                          height="250px"
                          className=""
                        />
                        <h3 className="text-center">{habitacion.nombre}</h3>
                        <p className="mx-2">{habitacion.descripcion}</p>
                        <h2 className="text-start">${habitacion.valorNoche}</h2>
                        <div className="mx-2 d-inline">
                          <i className="bi bi-person-fill"></i>
                          <i className="bi bi-person-fill"></i>
                          <i className="bi bi-person-fill"></i>
                        </div>
                        <button onClick={()=>{
                            setidHabitacion(habitacion._id)
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Habitacion Seleccionada',
                                showConfirmButton: false,
                                timer: 2500
                              })
                        }} class="btn btn-info btn btn-outline-dark w-75 ">
                         Reservar</button>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>

        <div>
          <Footer></Footer>
        </div>
      </>
    );
  }
}
