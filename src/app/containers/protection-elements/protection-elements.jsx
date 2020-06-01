import React, { useState }  from 'react';
import Header from '../../components/Header/header.jsx';
import FooterElements from '../../components/FooterElements/footer-elements.jsx';
import OvalosHome from '../../../assets/images/ovalos-home.svg';
import PolicyData from '../../containers/policy-treatment-data/policy-treatment-data.page.jsx';
import './protection-elements.css';


const ProtectionElements = () =>{

    return(
        <React.Fragment>
            <div className='main-container'>
            
                <div className='header'>
                    <Header/>
                </div>

                <div className='main-protection-elements-container'>
                    <form className='main-form-container' action="">
                        <div className='protection-elements-section'>
                            <h3 className='protection-elements-title'>lleva elementos de prevención</h3>
                            <div className='protection-options-container'>
                                <div className='checkbox-container'>
                                    <div>
                                        <input className='s-checkbox' type="text"/>
                                        <i></i>
                                    </div>
                                    <label className='s-element m-right' htmlFor="">Tapabocas</label>
                                </div>
                                
                                <div className='checkbox-container r-top'>
                                    <input className='s-checkbox' type="text"/>
                                    <label className='s-element m-right' htmlFor="">Máscara protectora</label>
                                </div>
                                
                                <div className='checkbox-container r-top'>
                                    <input className='s-checkbox' type="text"/>
                                    <label className='s-element' htmlFor="">Guantes</label>
                                </div>
                            </div>
                        </div>

                        <div className='options-risk-main-container'>
                            <h3 className='protection-elements-title'>Seleccione las opciones que apliquen en su caso</h3>
                            <div className='options-risk-container'>
                                    <input className='s-checkbox' type="text"/>
                                    <label className='s-element' htmlFor="">He presentado algún síntoma la última semana (tos, fiebre, malestar general)</label>

                                    <input className='s-checkbox m-top' type="text"/>
                                    <label className='s-element m-top' htmlFor="">Estuve en contacto con personas que presentaron alguno de esos síntomas</label>

                                    <input className='s-checkbox m-top' type="text"/>
                                    <label className='s-element m-top' htmlFor="">Hice un viaje internacional en los últimos 30 días</label>
                                
                                    <input className='s-checkbox m-top' type="text"/>
                                    <label className='s-element m-top' htmlFor="">Hice un viaje nacional en los últimos 30 días</label>
                                
                                    <input className='s-checkbox m-top' type="text"/>
                                    <label className='s-element m-top' htmlFor="">Soy trabajador de la salud</label>
                            </div>
                        </div>                        

                        <button className=''>registrar</button>
                    </form>
                </div>

                <img className='ovalos-protection-elements' src={OvalosHome} alt=""/>
                
                <div className='footer-protection'>
                    <FooterElements/>
                </div>
            </div>
        </React.Fragment>
    )
}
export default ProtectionElements;