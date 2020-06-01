import React, { useState }  from 'react';
import FooterHome from '../../components/FooterHome/footer-home.jsx';
import Logo from '../../../assets/images/logo-nuestro.svg';
import OvalosHome from '../../../assets/images/ovalos-home.svg';
import asiaticGirl from '../../../assets/images/asiatic-girl.png';
import './home-page.css';


const Home = () =>{

    return(
        <React.Fragment>
            <div className="Box">
                <img className='ovalos' src={OvalosHome} alt=""/>
                <img className='asiatic-girl' src={asiaticGirl} alt=""/>
                <div className='HomePage'>
                    <img className='logoNuestro' src={Logo} alt="LOGO Nuestro" title="Logo Nuestro"/>
                    <form className="form">
                        <div className='radial-container'>
                            <div className="container-user">
                                <label className="content-input">
                                    <input className="s-radial" type="radio" id="cliente" name="module" value="client"/>
                                    <i></i>
                                </label>
                                <label className="style-font m-client cliente" htmlFor="cliente">Cliente</label>
                            </div>

                            <div className="container-user">
                                <label className="content-input">
                                    <input className="s-radial" type="radio" id="empleado" name="module" value="employee"/>
                                    <i></i>
                                </label>
                                <label className="style-font empleado" htmlFor="empleado">Empleado</label>
                            </div>
                        </div>

                    
                        <select className='id-select' name="" id="">
                            <option className='select-place' disabled selected>Tipo de documento</option>
                            <option className='border-option' value="">Cédula de ciudadania</option>
                            <option className='border-option' value="">Cédula de extranjería</option>
                            <option className='border-option' value="">NIT</option>
                            <option className='border-option' value="">Pasaporte</option>
                            <option className='border-option' value="">NIUP</option>
                        </select>
                        <input className='id-number' type="text" placeholder="Número de documento"/>
                    
                        <button> ingresar </button>
                    </form>
                    <div className='footer-home'>
                        <FooterHome/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Home;