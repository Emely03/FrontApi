import { Footer } from "../Footer/Footer"
import './Contact.css'
export function Contact(){
    return (   
        <>
       <form>
       <div className="container-fluid p-5 contact">
            <div className="row">
                <div className="col-12 col-md-8 text-dark">
                <h3>Contactanos</h3>
                <h5>Reserva ya!!!</h5>
                <hr></hr>
                </div>
            </div>
            <div className="row text-dark fw-bold">
                <div className="col-12 col-md-4">
                <label for="basic-url" class="form-label">Nombre</label>
                <div class="input-group mb-3">
                <span class="input-group-text"><i class="bi bi-people-fill"></i></span>
                <input type="text" class="form-control" placeholder="Username"/>
                </div>
                </div>
                <div className="col-12 col-md-4">
                <label for="basic-url" class="form-label">Email</label>
                <div class="input-group mb-3">
                <span class="input-group-text"><i class="bi bi-envelope-dash"></i></span>
                <input type="text" class="form-control" placeholder="Email"/>
                </div>
                </div>
                <div className="col-12 col-md-4">
                <label for="basic-url" class="form-label">Celular</label>
                <div class="input-group mb-3">
                <span class="input-group-text"><i class="bi bi-telephone-fill"></i></span>
                <input type="number" class="form-control" placeholder="Email"/>
                </div>
                </div>
            </div>
            <div className="row text-white fw-bold">
           
        
            </div>
            <button type="button" class="btn btn-info btn btn-outline-dark " >Enviar</button>
            
            </div>
        </form>
        </> 
        
        )}