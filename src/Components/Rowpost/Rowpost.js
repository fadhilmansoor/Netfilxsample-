import React  from 'react'
import { useState } from 'react'
import Youtube from 'react-youtube'
import { useEffect } from 'react'
import {ImgUrl,API_KEY} from '../../constants/constants'
import './Rowpost.css'
import axios from 'axios'
function Rowpost(props) {
const [movies,setmovies] = useState([])
const [urlid,setUrlId] = useState('')
  useEffect(()=>{
    axios.get(props.url).then(response =>{
       console.log(response.data.results , 'seeeeeeeezzztmovies');
      setmovies(response.data.results )
     
    }).catch(err =>{
      console.log(err);
    },)
  },[props.url])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovies = (id)=>{
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response =>{
      console.log(response.data);
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log('array empty');
      }
    })
  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {  movies.map ((obj)=>
            <img onClick={()=>
              handleMovies(obj.id)
            } className={props.issmall ?'smallposter':'poster'} alt='poster' src={`${ImgUrl+obj.backdrop_path}`}/>
            )
          } 
            </div>    
      {urlid && < Youtube opts={opts} videoId={urlid.key }/>}   
    </div>
  )
}

export default Rowpost 
