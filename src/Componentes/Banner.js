import React from 'react'
import instance from '../axios';
import { makeStyles,Button } from '@material-ui/core';
import axios from 'axios';
import requests from '../Requests';
import '../Estyles-Pages/Banner.css'


const Banner = () => {
  const classes = useStyles();
  const truncar = (str,n) => str?.length > n ? `${str.substr(0,n-1)} ...`: str;
  const [pelicula,setPelicula] = React.useState([]);

  React.useEffect(()=>{
    const fetchPelis = async ()=>{
      try{
        const promesa = await axios.get(`${instance}${requests.fetchNetflixOriginals}`)
        const coso = promesa.data.results
        setPelicula(coso[Math.floor(Math.random()*coso.length -1 )])
        
      }catch (error){
        console.error(error)
      }
     }
    fetchPelis()
  },[])
  
  return (
    <div className={classes.root}
    id='banner-contain'
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${window.screen.width < 600?pelicula.poster_path:pelicula.backdrop_path}")`,
        position: 'relative',
        objectFit: 'contain',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white'
      }}
    >
      <div className={classes.content}>
        <div 
        id='title'
        style={{
          marginBottom:"25px",
          fontSize:"50px",
          textShadow:'2px 2px 4px rgb(0 0 0 / 60%)',
          }}>
          {pelicula?.title || pelicula?.name}
          </div>
        <div id='buttons' className={classes.buttons}>
          <Button >play</Button>
          <Button >My list</Button>
        </div>
        <div 
        id='text'
         style={{marginTop:"18px"}} className={classes.text}>
          {
            truncar(pelicula?.overview,160)
          }
        </div>
       
      </div>
      <div className={classes.difuminado} ></div>
    </div>
  )
}
const useStyles = makeStyles((theme)=>({
    root:{
      height: '800px',
      position: 'relative',
      objectFit: 'contain',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white'
    },
    buttons:{
      '& button':{
      cursor: 'pointer',
      color: 'black !important',
      border: 'none',
      fontWeight: 700,
      borderRadius: '5px',
      padding: theme.spacing(1, 4, 1, 4),
      marginRight: '1rem',
      backgroundColor: 'rgba(51,51,51,0.5)',
    },
    '& button:hover':{
      backgroundColor: 'rgba(51,51,51,0.9)',
      color: 'black !inportant',
      transition: '0.5s',
    }
  },
  difuminado:{
    position:'absolute',
    top: '40vh',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex:99,
    backgroundImage:
      'linear-gradient(180deg, transparent, rgba(37,37,37,0.61), rgba(20,20,20,255))',
  },
  text:{
    marginRight:'20px',
    fontSize:'1.2vw',
    textShadow:'2px 2px 4px rgb(0 0 0 / 45%)'
  },
  content:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-end',
    position:'absolute',
    bottom:'30%',
    left:'4%',
    width:'36%',
    flexWrap:'wrap',
    zIndex:'100'
  }
  
}))

export default Banner