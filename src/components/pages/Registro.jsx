import React from 'react';
import Fondo from '../../assets/Fondo.jpg'


const Registro = () => {
    return (

        
        <div   className='FondoPagina'>
            <section>
         <div class="form-box">
            <div class="form-value">
                <form action="">
                    <h2 className='titulo-registro'>Registrarse</h2>

                    <div class="inputbox">
                        <i class="fa-regular fa-envelope icon"></i>
                        <input type="email" required></input>
                        <label for="">Email</label>
                    </div>

                    <div class="inputbox">
                        <i class="fa-solid fa-lock icon"></i>
                        <input type="password" required></input>
                        <label for="">Password</label>
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