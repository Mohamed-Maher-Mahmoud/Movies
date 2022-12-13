import React from 'react';
import Media from '../Media/Media';
import { useState , useEffect } from "react";
import axios from "axios";
import {Helmet , HelmetProvider } from "react-helmet-async"



export default function Movies() {


    const [trendingTv , setTrendingTv] = useState([]);
  
  
    
    async function getTrending(){
    
  let {data} = await axios.get(`https://api.themoviedb.org/3/trending/tv/week?api_key=f1aca93e54807386df3f6972a5c33b50`)
    setTrendingTv(data.results);
    
    
      }
    
    useEffect(()=>{
      getTrending();
      
    } , []);


return <>
  <HelmetProvider >
<Helmet>
        <title>Tv Page</title>
      
      </Helmet>
      </HelmetProvider>



    
<div className='row py-5'>

<div className='col-md-4 d-flex align-items-center'>
    <div>
      
    <div className='border w-25 mb-3'></div>
            <h2 className='h4'>Trending <br/>Tv<br/>To Watch Right Now </h2>
            <p className='py-2 text-muted'>Watch Tv to watch Right Now </p>
            <div className='border w-100 mb-3'></div>
    </div>
</div>

{trendingTv.map((item , index)=> <Media key={index} item={item} />)}

</div>
</>
}