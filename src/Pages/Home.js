import React,{useState} from 'react'
import Header from '../Componentes/Header';
import Banner from '../Componentes/Banner.js';
import requests from '../Requests';

//import styles
import '../Estyles-Pages/Home.css'
import Rows from '../Componentes/Rows.js';
import { useSelector } from 'react-redux';

const Home = () => {
  const email = useSelector((state)=> state.email);
  const [screen,setScreen] = useState(null)
  React.useEffect(()=>{
    console.log(email)
    if(window.screen < 660) setScreen(window.screen);
  },[email])
  return (
    <div className='Home'>
        
        <Header screen={screen} />
        <Banner />
        <div className='contain-rows'>
        <Rows title={'Originales de Netflix'} genero_url={requests.fetchNetflixOriginals} esPrimero/>
        <Rows title={'Peliculas de Accion'} genero_url={requests.fetchActionMovies}/>
        <Rows title={'Peliculas de comedia'} genero_url={requests.fetchComedyMovies}/>
        <Rows title={'Documentales'} genero_url={requests.fetchDocumentaries}/>
        <Rows title={'Peliculas de Horror'} genero_url={requests.fetchHorrorMovies}/>
        <Rows title={'Romances'} genero_url={requests.fetchRomanceMovies}/>
        <Rows title={'Top en la lista de preferidos...'} genero_url={requests.fetchTopRated}/>
        <Rows title={'Top Trending'} genero_url={requests.fetchTrending}/>
        </div>
    </div>
  )
}

export default Home