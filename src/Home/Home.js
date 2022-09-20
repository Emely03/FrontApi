import './Home.css'
import { Formularioreserva } from '../Formularioreserva/Formularioreserva.js'
import { Actividades } from '../Actividades/Actividades'
import { Footer } from '../Footer/Footer'

export function  Home(){
    return(
        <>
        <div className='banner'>
        <Formularioreserva></Formularioreserva>
        </div>
        <div>
        <Actividades></Actividades>
        </div>
        <div>
        <Footer></Footer>
        </div>
        </>
    )
}