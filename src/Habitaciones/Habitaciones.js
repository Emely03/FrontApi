import { ServicioHabitacion } from "../services/ServicioHabitacion/ServicioHabitacion.js";
import { useEffect, useState } from "react"; //HOOKS
import './Habitaciones.css'
import { Footer } from '../Footer/Footer'

export function Habitaciones() {
    //USANDO EL USESTATE
    //(FUNCION ESPECIAL PARA CREAR VARIBLE GLOBAL DENTRO DEL COMPONENTE)
    const [estadoCarga, setEstadoCarga] = useState(true);
    const [habitaciones, setHabitacion] = useState(null);

    //USANDO EL USEEFECT
    //Funcion que controla el render(vista, lo que pinta) de un componente

    useEffect(function () {
        ServicioHabitacion().then(function (respuesta) {
            setHabitacion(respuesta);
            setEstadoCarga(false);
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
            <div>
                {/* se accede a la logica con las {}, recorrer el json*/}
                <div className="container-fluid p-5 habitaciones">
                    <div className="row row-cols-1 row-cols-md-2 g-5">
                        {
                            habitaciones.datos.map(function (habitacion) {
                                return (
                                    <div className="col">
                                        <div className="card h-100">
                                            <h1 class="text-white bg-dark text-center">{habitacion.nombre}</h1>
                                            <img className="card-img-top h-100" src={habitacion.imagenes[0]}></img>
                                            <div className="card-body text-white bg-dark">
                                                <h5 className="card-title">Habitaciones</h5>
                                                <p className="card-text">
                                                    {habitacion.descripcion}
                                                </p>
                                                <a href="#" className="btn btn-info btn btn-outline-dark">
                                                    Contáctanos
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                <div>
                    <Footer></Footer>
                </div>
            </div>
        );

    }
}
