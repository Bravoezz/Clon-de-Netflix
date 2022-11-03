import axios from 'axios';
import React from 'react'
import instance from '../axios';
import '../Styles-Component/Rows.css'
import { motion } from 'framer-motion';

const Row = ({title,genero_url,esPrimero}) => {
  const [movie,setMovie] = React.useState([]);
  const image_url = "https://image.tmdb.org/t/p/original"
  
  React.useEffect(()=>{
    const fetchResults = async ()=>{
      const requests = await axios.get(`${instance}${genero_url}`)
      setMovie(requests.data.results)
      console.log(requests.data.results)
      return requests
    };
    fetchResults();
  },[genero_url])

  return (
    <div className='rows'>
      <div className='font'>{title}</div>
      <div className='posters'>
        { 
          movie.map(
            (peli) =>{
              return(
                ((esPrimero && peli.poster_path)||
              (!esPrimero && peli.backdrop_path))&&(
                <motion.img 
                whileTap={{ scale: 0.9 }}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.45 },
                }}
                drag
                dragConstraints={
                  {
                    right:0,
                    left:0,
                    top:0,
                    bottom: 0
                  }
                }
                className={`poster ${esPrimero && "posterLargo"}`}
                key={peli.id}
                src={`${image_url}${esPrimero? peli.poster_path:peli?.backdrop_path}`}
                alt={peli.name}
                />
              )
              )
              
            }
          )
        }
      </div>


    </div>
  )
}

export default Row