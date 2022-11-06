import React from 'react'
import logo from '../imagenes/Netflix_2015_logo.svg.png'
import '../Styles-Component/Header.css'
import { useNavigate } from 'react-router-dom'
import profile from '../imagenes/profile.jpg';
import { useSelector } from 'react-redux';
import {AiOutlineCaretDown} from 'react-icons/ai'
import {AnimatePresence, motion } from 'framer-motion';
import {IoMdNotifications} from 'react-icons/io';
import {CgSearch} from 'react-icons/cg'
import { InputBase } from '@material-ui/core';


const Header = ({screen}) => {
    const [show,setShow] = React.useState(false);
    const Navigate = useNavigate();
    const [pollito, setPollito] = React.useState(false);
    const [rotate, setRotate] = React.useState(false);
    const [icon1, setIcon1] = React.useState(false);
    const state = useSelector((state)=> state)
    
    const scrollHandler = ()=>{
      if(window.scrollY > 100) setShow(true);
      else setShow(false);
    }
    React.useEffect(()=>{
      window.addEventListener('scroll',scrollHandler)
      return ()=> window.removeEventListener('scroll', scrollHandler);
    },[])

    const handleOver = ()=>{
      setPollito(true)
      setRotate(!rotate)
    }

  return (
    <div className={!show? 'header': 'header transparent'}>
      <div className='bar'>
      <img src={logo} alt='logo' className='logo' onClick={()=> Navigate('/')}/>
     {screen? (<ul className='navigate'>
        <li >Inicio</li>
        <li >Series</li>
        <li >Peliculas</li>
        <li >Novedades populares</li>
        <li >Mi lista</li>
        <li >Explorar por idiomas</li>
      </ul>): null}
      <div className='avatar-Caret'>
        <AnimatePresence>
        {
          icon1 && (
            
            <motion.div
            initial={{ opacity: 0, scale: 0.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale:0.1}}
            transition={{ ease: "easeOut", duration: 0.5 }}
            onMouseOver ={()=>{setIcon1(true)}}
            ><InputBase 
            type='text'
            className='searchInput'
            placeholder='...'
            /> 
            </motion.div>
            
          )
        }
        </AnimatePresence>
        <CgSearch
        onClick={()=> setIcon1(!icon1)}
        onMouseOver ={()=>{setIcon1(true)}}
        className='icon-1'/><motion.div 
        whileHover={{
          rotate:[0,30,0,25,0,20,0,15,0,10,0,5,0]
        }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className='motionDiv'>
        <IoMdNotifications className='icon-1'/></motion.div>
        <img  src={profile} 
          alt='profile' 
          className='avatar'
          onMouseOver={handleOver}
          onMouseOut = {()=>{
            setTimeout(() => {
              setPollito(!pollito)
              setRotate(!rotate)
            }, 500);
          }}
          onClick={()=> setPollito(true)}
          />
          <AiOutlineCaretDown onClick={()=> setPollito(!pollito)} className={`CaretDown ${rotate && 'Caret'}`} />
        </div>
        { pollito && (<motion.div
        animate={{y:25}}
        transition={{duration:0.5}}
        drag
        dragConstraints={
          {
            right:15,
            left:-20,
            top:5,
            bottom: 5
          }
        }
        onMouseOver={()=> 
          setTimeout(() => {
            setPollito(true)
          }, 500)}
        onMouseOut={()=>{
          setTimeout(()=>{
            setPollito(false)
          },1000)
        }}
        className='poll'>
        <AiOutlineCaretDown className='icon-3'/>
       <div 
        className='poll-1'
        >
       <div><img className="avatar uno" alt="cosas" src={profile}/></div>
        <div>
        <h5>{state.email}</h5>
        <h6>{state.password}</h6></div>
      </div></motion.div>)
     }
      </div>
     
    </div>
  )
}

export default Header