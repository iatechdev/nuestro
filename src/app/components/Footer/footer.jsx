import React, { useState }  from 'react';
import './footer.css';
import LogoIatech from '../../../assets/images/logo-iatech.svg';

/* import { useForm } from 'react-hook-form' */


const footer = () =>{
    return(
        <React.Fragment>
            <div className='iatech-container'>
                <div className='desing-letter'>
                    <h6>Sistema de Registro de Clientes</h6>
                    <h6>Diseñado y desarrollado por</h6>
                </div>
                <div>
                    <img className='img-iatech' src={LogoIatech} alt=""/>
                </div>
            </div>
        </React.Fragment>
    )
}
export default footer;