import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { inBoolean } from '../redux/actions';
import '../Styles-Component/Despleg.css'

const Despleg = () => {
    const dispatch = useDispatch();
    const boolean = useSelector(state=>state.boolean)
    function handleclick(){
      dispatch(inBoolean(boolean + 1))
    }
  return (
    <label  htmlFor="check" className="bar bar-2">
    <input id="check" type="checkbox" />

    <span onClick={handleclick} className="top"></span>
    <span onClick={handleclick} className="middle"></span>
    <span onClick={handleclick} className="bottom"></span>
    </label>
  )
}

export default Despleg