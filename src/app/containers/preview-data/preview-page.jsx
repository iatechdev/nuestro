import React, {useState, useEffect} from 'react';
import { useForm } from 'react-hook-form'
import BannerTop from "../../components/banner-top/banner-top";
import './preview-page.css';
import axios from 'axios';


const Preview = ({ history }) =>{

    /*const [nit] = useState(JSON.parse(localStorage.getItem("Token")));
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
*/
    

    return(

        <React.Fragment>
            <BannerTop title="CONFIRMA / ACTUALIZA TUS DATOS"/>
               <div className='PreviewPage'>
                    <div className="lineGray">
                        <h2 >RAZÓN SOCIAL</h2>
                        <h2>NIT. <span></span> </h2>
                    </div>
                    <h3> TEMAS DE INTERÉS </h3>
                    <form >
                        <div className="form">
                        <div className="w-50-c">
                            <div className="w-100">
                                <label className="content-input">
                                    <input type="checkbox" />
                                    <i></i>
                                </label>
                                <label className="style-font" htmlFor="administrativo_c"> Administrativa </label>
                            </div>
                            <div className="w-100">
                                <label className="content-input">
                                    <input type="checkbox" />
                                    <i></i>
                                </label>
                                <label className="style-font" htmlFor="comercioyventas_c"> Comercial y venta </label>
                            </div>
                            <div className="w-100">
                                <label className="content-input">
                                    <input type="checkbox" />
                                    <i></i>
                                </label>
                                <label className="style-font" htmlFor="comercio_exterior_c"> Comercio Exterior</label>
                            </div>
                            <div className="w-100">
                                <label className="content-input">
                                    <input type="checkbox" />
                                    <i></i>
                                </label>
                                <label className="style-font" htmlFor="competenciasblandas_c"> Competencias blandas</label>
                            </div>
                            <div className="w-100">
                                <label className="content-input">
                                    <input type="checkbox"  id="comunicaciones_c"/>
                                    <i></i>
                                </label>
                                <label className="style-font" htmlFor="comunicaciones_c"> Comunicaciones</label>
                            </div>
                            <div className="w-100">
                                <label className="content-input">
                                    <input type="checkbox"  name="contabilidad_c"   id="contabilidad_c"/>
                                    <i></i>
                                </label>
                                <label className="style-font" htmlFor="contabilidad_c"> Contabilidad</label>
                            </div>
                            <div className="w-100">
                                <label className="content-input">
                                    <input type="checkbox"  name="economia_naranja_c" id="economia_naranja_c"/>
                                    <i></i>
                                </label>
                                <label className="style-font" htmlFor="economia_naranja_c"> Econimia naranja</label>
                            </div>
                            <div className="w-100">
                                <label className="content-input">
                                    <input type="checkbox"  name="gerencia_c"  id="gerencia_c"/>
                                    <i></i>
                                </label>
                                <label className="style-font" htmlFor="gerencia_c"> Gerencia</label>
                            </div>
                            <div className="w-100">
                                <label className="content-input">
                                    <input type="checkbox" name="gestiondecalidad_c" id="gestiondecalidad_c"/>
                                    <i></i>
                                </label>
                                <label className="style-font" htmlFor="gestiondecalidad_c"> Gestion de calidad</label>
                            </div>
                            <div className="w-100">
                                <label className="content-input">
                                    <input type="checkbox"   id="gestionestrategica_c"/>
                                    <i></i>
                                </label>
                                <label className="style-font" htmlFor="gestionestrategica_c"> Gestion estratégica</label>
                            </div>
                             <div className="w-100">
                                <label className="content-input">
                                    <input type="checkbox"  id="gestionhumana_c"/>
                                    <i></i>
                                </label>
                                <label className="style-font" htmlFor="gestionhumana_c"> Gestión humana</label>
                            </div>

                        </div>
                        <div className="w-50-c">
                            <div className="w-100">
                                <label className="content-input">
                                    <input type="checkbox"  name="idiomas_c" id="idiomas_c"/>
                                    <i></i>
                                </label>
                                <label className="style-font" htmlFor="idiomas_c"> Idiomas</label>
                            </div>
                            <div className="w-100">
                                <label className="content-input">
                                    <input type="checkbox"  id="innovacion_c"/>
                                    <i></i>
                                </label>
                                <label className="style-font" htmlFor="innovacion_c"> Innovacion</label>
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