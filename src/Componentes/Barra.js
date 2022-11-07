import React from 'react'
import '../Styles-Component/Barra.css'
import { motion } from 'framer-motion'

const Barra = () => {
    const containerVariants ={
        init:{
            onpacity:-5,
            x:'50vh',
            
        },
        ani:{
            
            opacity:1,
            x:1,
            transition:{
                duration:0.8
            }
            
        },
        
    }

  return (
    
  <motion.div class="content"
  variants={containerVariants}
  initial='init'
  animate='ani'
  exit={{ x:'50vh',opacity: -5,transition:{duration:1}}}
  >

    <div className='ul'>
    <ul className='ul1'>
        <li className='li' >Inicio</li>
        <li className='li' >Series</li>
        <li className='li' >Peliculas</li>
        <li className='li' >Novedades populares</li>
        <li className='li' >Mi lista</li>
        <li className='li' >Explorar por idiomas</li>
      </ul>
      
      </div>
      <div class="spinner">
        <span>B</span>
        <span>y</span>
        <span>_</span>
        <span>B</span>
        <span>r</span>
        <span>a</span>
        <span>y</span>
        <span>a</span>
        <span>n</span>
    </div>
  </motion.div>

  )
}

export default Barra