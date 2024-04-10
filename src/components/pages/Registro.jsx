import React from 'react';
import Fondo from '../../assets/Fondo.jpg'


const Registro = () => {
    return (

        
        <div   className='FondoPagina'>
            <section>
         <div class="form-box">
            <div class="form-value">
                <form action="">
                    <h2 className='titulo-registro text-center'>Registrarse</h2>

                    <div className="form-group row">
                                <div className="col">
                                <div class="inputboxAyN">
                        <input type="Nombre" required></input>
                        <label for="">Nombre</label>
                    </div>
                                </div>
                                <div className="col">
                                <div class="inputboxAyN">
                        <i className="fa-regular fa-envelope icon"></i>
                        <input type="Apellido" required></input>
                        <label for="">Apellido</label>
                    </div>

                                </div>
                            </div>
                    <div class="inputbox">
                        <i className="fa-regular fa-envelope icon"></i>
                        <input type="email" required></input>
                        <label for="">Email</label>
                    </div>

                    <div class="inputbox">
                        <i class="fa-regular fa-envelope icon"></i>
                        <input type="email" required></input>
                        <label for="">Repetir Email</label>
                    </div>
                    <div class="inputbox">
                        <i class="fa-solid fa-lock icon"></i>
                        <input type="password" required></input>
                        <label for="">Contraseña</label>
                    </div>

                    <div class="inputbox">
                        <i class="fa-solid fa-lock icon"></i>
                        <input type="password" required></input>
                        <label for="">Repetir Contraseña</label>
                    </div>
            
                    <button>Registrar</button>

                </form>
            </div>
        </div>
        </section>
        </div>
    );
};

export default Registro;