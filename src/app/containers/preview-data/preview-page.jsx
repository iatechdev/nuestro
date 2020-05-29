import React, {useState, useEffect} from 'react';
import { useForm } from 'react-hook-form'
import BannerTop from "../../components/banner-top/banner-top";
import './preview-page.css';
import axios from 'axios';


const Preview = ({ history }) =>{

    const [nit] = useState(JSON.parse(localStorage.getItem("Token")));
    const { register,handleSubmit} = useForm();
    const [themesModel, setThemesModel] = useState({});
    const onSubmit = dataForm => {formGuard(dataForm)}

    async function getThemes(){
        await axios.get(`https://master-ccoa.iatech.com.co:4001/api/themes/themescustomer?doc=${nit.nit}`).then((response) =>{
            if(response.status === 200 && response.data){
                setThemesModel(response.data.responde[0]);
            }

        }).catch((error)=>{
            console.log(error);
        });
    }

    function handleChange(e) {
        setThemesModel({...themesModel, [e.target.name] : e.target.checked })
    }

    async function formGuard(){
        await axios.put(`https://master-ccoa.iatech.com.co:4001/api/themes/newinterest_nit/${themesModel.id_c}`,
        {
            administrativo_c : themesModel.administrativo_c,
            comercio_exterior_c : themesModel.comercio_exterior_c,
            comunicaciones_c : themesModel.comunicaciones_c,
            economia_naranja_c : themesModel.economia_naranja_c,
            gestiondecalidad_c : themesModel.gestiondecalidad_c,
            gestionhumana_c : themesModel.gestionhumana_c,
            innovacion_c : themesModel.innovacion_c,
            mercadeo_c : themesModel.mercadeo_c,
            procesosyproductividad_c : themesModel.procesosyproductividad_c,
            sector_publico_c : themesModel.sector_publico_c,
            ti_tecnologiadelainformacion_c : themesModel.ti_tecnologiadelainformacion_c,
            comercioyventas_c : themesModel.comercioyventas_c,
            competenciasblandas_c : themesModel.competenciasblandas_c,
            contabilidad_c : themesModel.contabilidad_c,
            gerencia_c : themesModel.gerencia_c,
            gestionestrategica_c : themesModel.gestionestrategica_c,
            idiomas_c : themesModel.idiomas_c,
            juricoylegal_c : themesModel.juricoylegal_c,
            normativas_c : themesModel.normativas_c,
            proyectos_c : themesModel.proyectos_c,
            servicioalcliente_c : themesModel.servicioalcliente_c,
            tributario_c : themesModel.tributario_c

        }).then((response) =>{
            history.push('/policy_data');        
        }).catch((error)=>{
            console.log(error);
        });
    }



    useEffect(() => {
        getThemes();
    },[]);

    

    return(

        <React.Fragment>
            <BannerTop title="CONFIRMA / ACTUALIZA TUS DATOS"/>
               <div className='PreviewPage'>
                    <div className="lineGray">
                        <h2 onClick={()=>{console.log(themesModel)}}>RAZÓN SOCIAL</h2>
                        <h2>NIT. <span> {nit.nit} </span> </h2>
                    </div>
                    <h3> TEMAS DE INTERÉS </h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form">
                        <div className="w-50-c">
                            <div className="w-100">
                                <label className="content-input">
                                    <input type="checkbox" onChange={e => handleChange(e)} name="administrativo_c" ref={register}   checked={themesModel.administrativo_c ? true : false} id="administrativo_c"/>
                                    <i></i>
                                </label>
                                <label className="style-font" htmlFor="administrativo_c"> Administrativa </label>
                            </div>
                            <div className="w-100">
                                <label className="content-input">
                                    <input type="checkbox" onChange={e => handleChange(e)} name="comercioyventas_c"   checked={themesModel.comercioyventas_c ? true : false} ref={register}  id="comercioyventas_c"/>
                                    <i></i>
                                </label>
                                <label className="style-font" htmlFor="comercioyventas_c"> Comercial y venta </label>
                            </div>
                            <div className="w-100">
                                <label className="content-input">
                                    <input type="checkbox" onChange={e => handleChange(e)} checked={themesModel.comercio_exterior_c ? true : false} name="comercio_exterior_c" ref={register}  id="comercio_exterior_c"/>
                                    <i></i>
                                </label>
                                <label className="style-font" htmlFor="comercio_exterior_c"> Comercio Exterior</label>
                            </div>
                            <div className="w-100">
                                <label className="content-input">
                                    <input type="checkbox" onChange={e => handleChange(e)} onChange={e => handleChange(e)} checked={themesModel.competenciasblandas_c ? true : false} name="competenciasblandas_c" ref={register}  id="competenciasblandas_c"/>
                                    <i></i>
                                </label>
                                <label className="style-font" htmlFor="competenciasblandas_c"> Competencias blandas</label>
                            </div>
                            <div className="w-100">
                                <label className="content-input">
                                    <input type="checkbox" onChange={e => handleChange(e)} checked={themesModel.comunicaciones_c ? true : false} name="comunicaciones_c" ref={register}  id="comunicaciones_c"/>
                                    <i></i>
                                </label>
                                <label className="style-font" htmlFor="comunicaciones_c"> Comunicaciones</label>
                            </div>
                            <div className="w-100">
                                <label className="content-input">
                                    <input type="checkbox" onChange={e => handleChange(e)}  checked={themesModel.contabilidad_c ? true : false} name="contabilidad_c" ref={register}  id="contabilidad_c"/>
                                    <i></i>
                                </label>
                                <label className="style-font" htmlFor="contabilidad_c"> Contabilidad</label>
                            </div>
                            <div className="w-100">
                                <label className="content-input">
                                    <input type="checkbox" onChange={e => handleChange(e)} checked={themesModel.economia_naranja_c ? true : false} name="economia_naranja_c" ref={register} id="economia_naranja_c"/>
                                    <i></i>
                                </label>
                                <label className="style-font" htmlFor="economia_naranja_c"> Econimia naranja</label>
                            </div>
                            <div className="w-100">
                                <label className="content-input">
                                    <input type="checkbox" onChange={e => handleChange(e)} checked={themesModel.gerencia_c ? true : false} name="gerencia_c" ref={register} id="gerencia_c"/>
                                    <i></i>
                                </label>
                                <label className="style-font" htmlFor="gerencia_c"> Gerencia</label>
                            </div>
                            <div className="w-100">
                                <label className="content-input">
                                    <input type="checkbox" onChange={e => handleChange(e)} checked={themesModel.gestiondecalidad_c ? true : false} name="gestiondecalidad_c" ref={register} id="gestiondecalidad_c"/>
                                    <i></i>
                                </label>
                                <label className="style-font" htmlFor="gestiondecalidad_c"> Gestion de calidad</label>
                            </div>
                            <div className="w-100">
                                <label className="content-input">
                                    <input type="checkbox" onChange={e => handleChange(e)} checked={themesModel.gestionestrategica_c ? true : false} name="gestionestrategica_c" ref={register} id="gestionestrategica_c"/>
                                    <i></i>
                                </label>
                                <label className="style-font" htmlFor="gestionestrategica_c"> Gestion estratégica</label>
                            </div>
                             <div className="w-100">
                                <label className="content-input">
                                    <input type="checkbox" onChange={e => handleChange(e)} checked={themesModel.gestionhumana_c ? true : false}  name="gestionhumana_c" ref={register} id="gestionhumana_c"/>
                                    <i></i>
                                </label>
                                <label className="style-font" htmlFor="gestionhumana_c"> Gestión humana</label>
                            </div>

                        </div>
                        <div className="w-50-c">
                            <div className="w-100">
                                <label className="content-input">
                                    <input type="checkbox" onChange={e => handleChange(e)} checked={themesModel.idiomas_c ? true : false} name="idiomas_c" ref={register} id="idiomas_c"/>
                                    <i></i>
                                </label>
                                <label className="style-font" htmlFor="idiomas_c"> Idiomas</label>
                            </div>
                            <div className="w-100">
                                <label className="content-input">
                                    <input type="checkbox" onChange={e => handleChange(e)} checked={themesModel.innovacion_c ? true : false} name="innovacion_c" ref={register} id="innovacion_c"/>
                                    <i></i>
                                </label>
                                <label className="style-font" htmlFor="innovacion_c"> Innovacion</label>
                            </div>
                            <div className="w-100">
                                <label className="content-input">
                                    <input type="checkbox" onChange={e => handleChange(e)} checked={themesModel.juricoylegal_c ? true : false} name="juricoylegal_c" ref={register} id="juricoylegal_c"/>
                                    <i></i>
                                </label>
                                <label className="style-font" htmlFor="juricoylegal_c"> Jurídico y legal </label>
                            </div>
                            <div className="w-100">
                                <label className="content-input">
                                    <input type="checkbox" onChange={e => handleChange(e)} checked={themesModel.mercadeo_c ? true : false} name="mercadeo_c" ref={register}  id="mercadeo_c"/>
                                    <i></i>
                                </label>
                                <label className="style-font" htmlFor="mercadeo_c">Mercadeo</label>
                            </div>
                            <div className="w-100">
                                <label className="content-input">
                                    <input type="checkbox" onChange={e => handleChange(e)} checked={themesModel.normativas_c ? true : false} name="normativas_c" ref={register} id="normativas_c"/>
                                    <i></i>
                                </label>
                                <label className="style-font" htmlFor="normativas_c">Normativas</label>
                            </div>
                            <div className="w-100">
                                <label className="content-input">
                                    <input type="checkbox" onChange={e => handleChange(e)} checked={themesModel.procesosyproductividad_c ? true : false} name="procesosyproductividad_c" ref={register} id="procesosyproductividad_c"/>
                                    <i></i>
                                </label>
                                <label className="style-font" htmlFor="procesosyproductividad_c">Procesos y productividad</label>
                            </div>
                            <div className="w-100">
                                <label className="content-input">
                                    <input type="checkbox" onChange={e => handleChange(e)} checked={themesModel.proyectos_c ? true : false} name="proyectos_c" ref={register} id="proyectos_c"/>
                                    <i></i>
                                </label>
                                <label className="style-font" htmlFor="proyectos_c">Proyectos</label>
                            </div>
                            <div className="w-100">
                                <label className="content-input">
                                    <input type="checkbox" onChange={e => handleChange(e)} checked={themesModel.sector_publico_c ? true : false} name="sector_publico_c" ref={register} id="sector_publico_c"/>
                                    <i></i>
                                </label>
                                <label className="style-font" htmlFor="sector_publico_c">Sector publico</label>
                            </div>
                            <div className="w-100">
                                <label className="content-input">
                                    <input type="checkbox" onChange={e => handleChange(e)} checked={themesModel.servicioalcliente_c ? true : false} name="servicioalcliente_c" ref={register} id="servicioalcliente_c"/>
                                    <i></i>
                                </label>
                                <label className="style-font" htmlFor="servicioalcliente_c"> Servicio al cliente</label>
                            </div>
                            <div className="w-100">
                                <label className="content-input">
                                    <input type="checkbox" onChange={e => handleChange(e)} checked={themesModel.ti_tecnologiadelainformacion_c ? true : false} name="ti_tecnologiadelainformacion_c" ref={register}  id="ti_tecnologiadelainformacion_c"/>
                                    <i></i>
                                </label>
                                <label className="style-font" htmlFor="ti_tecnologiadelainformacion_c"> TI: Tecnología de la información</label>
                            </div>
                            <div className="w-100">
                                <label className="content-input">
                                    <input type="checkbox" onChange={e => handleChange(e)} checked={themesModel.tributario_c ? true : false} name="tributario_c" ref={register} id="tributario_c"/>
                                    <i></i>
                                </label>
                                <label className="style-font" htmlFor="tributario_c"> Tributario</label>
                            </div>

                        </div>
                    </div>
                    <button> Guardar </button>
                    </form>
               </div>
           


               
           </React.Fragment>
    )
}
export default Preview;