import React from 'react'
import '../Estyles-Pages/Login.css';
import logo from '../imagenes/Netflix_2015_logo.svg.png'
import {NetButton, LogIn} from '../Styles-Component/styleComponents.js';
import next from '../imagenes/next.png'
import lenguage from '../imagenes/lenguage.png'
import  Form  from '../Componentes/Form.js';

function Login ({nombre}) {
    
    
    const [log,setLog] = React.useState(true);
    return(
        <div className='login'>
            
            <img onClick={()=> setLog(true)} src={logo} alt='logo' className='logoo'/>
            {log && <img src={lenguage} alt={"lenguage"} className="lenguage"/>}
           {log && <NetButton onClick={()=> setLog(!log)} className='netbutton'>Iniciar sesión</NetButton>}
            <div className='card-login'>
                {
                    log? <div className='log1'>
                        <h1>Películas ilimitadas, programas de TV y más.</h1>
                        <h2>Mira en cualquier lugar. Cancele en cualquier momento.</h2>
                        <div className='div-log'>
                            <h3>¿Listo para mirar? Ingrese su correo electrónico para crear o reiniciar su membresía.</h3>
                            <div className='div-log1'>
                            <LogIn placeholder='Dirección de correo electrónico' className='LogIn'/>
                            <NetButton onClick={()=> setLog(!log)} className='netbutton2'><span>Empezar</span><img src={next} alt='cositas'/></NetButton>
                            </div>
                        </div>
                    </div>
                    :<Form></Form>
                }
            </div>
        </div>

    )
}

export default Login