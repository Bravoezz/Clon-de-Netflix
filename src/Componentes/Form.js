import { InputBase } from '@material-ui/core'
import React from 'react'
import { useDispatch} from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { inEmail, inPassword } from '../redux/actions'
import '../Styles-Component/Form.css'
import { NetButton } from '../Styles-Component/styleComponents'

const Form = () => {
  const Navigate = useNavigate();
  const [input,setInput] = React.useState({
    email:"",
    password:""
  })
  const dispatch = useDispatch();
  const handleChange = (e)=>{
    setInput((p)=>({...p,[e.target.name]:e.target.value}))
    console.log(input)
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(inEmail(input.email))
    dispatch(inPassword(input.password))
    setInput({email:"",password:""})
    Navigate("/home")
  }
  return (
    <div className='contenedor-form'>
        <div className='contain-is'>
          Inicia sesión
        </div>
        <div>
          <form onSubmit={(e)=>handleSubmit(e)}>
            <InputBase 
            name='email'
            onChange={(e)=> handleChange(e)}
            value={input.email}
            type={'email'} 
            placeholder='Email o numero de telefono' 
            className='input'/>
            <InputBase
            onChange={(e)=> handleChange(e)}
            name='password'
            value={input.password} 
            type={'password'} 
            placeholder='Contraceña'
            className='input'/>
            <NetButton
            type='submit'>Inicia sesión</NetButton>
          </form>
        </div>
        <div>
          <p>Recuerdeme</p>
          <p>¿Nesesitas ayuda?</p>
        </div>
        <div>
          <p>¿Primera vez en Netflix?<a href='/'> Suscríbete ahora.</a></p>
          <p>Esta página está protegida por Google reCAPTCHA para comprobar que no eres un robot. <NavLink>Más info.</NavLink></p>
        </div>
    </div>
  )
}

export default Form