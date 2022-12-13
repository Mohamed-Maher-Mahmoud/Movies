import React from 'react';
import Media from '../Media/Media';
import { useState , useEffect } from "react";
import axios from "axios";
import {Helmet , HelmetProvider } from "react-helmet-async"


export default function Movies() {


    const [trendingMovies , setTrendingMovies] = useState([]);
  
  
    
    async function getTrending(){
    
      let {data} = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=f1aca93e54807386df3f6972a5c33b50`)
    setTrendingMovies(data.results);
    
    
      }
    
    
    
    useEffect(()=>{
      getTrending();
      
    } , []);


return <>

<HelmetProvider >
<Helmet>
        <title>Movies Page</title>
      
      </Helmet>
      </HelmetProvider>

      <div className='row py-5'>
  
        <div className='col-md-4 d-flex align-items-center'>
            <div> 
            <div className='border w-25 mb-3'></div>
                    <h2 className='h4'>Trending <br/>Movies<br/>To Watch Right Now </h2>
                    <p className='py-2 text-muted'>Watch Movies to watch Right Now </p>
                    <div className='border w-100 mb-3'></div>
            </div>
        </div>
  
        {trendingMovies.map((item , index)=> <Media key={index} item={item} />)}
  
      </div>

</>
}