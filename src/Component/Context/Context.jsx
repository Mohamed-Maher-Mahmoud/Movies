import { createContext } from "react";
import { useState , useEffect } from "react";
import axios from "axios";
export let MediaContext =createContext(0);

function MediaContextProvider(props) {

    const [trendingMovies , setTrendingMovies] = useState([]);
    const [trendingTv , setTrendingTv] = useState([]);
    const [trendingPeople , setTrendingPeople] = useState([]);
  
  
    
    async function getTrending(mediaType , callback){
    
      let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=f1aca93e54807386df3f6972a5c33b50`)
    callback(data.results);
    
    
      }
    
    
    
      useEffect(()=>{
        getTrending('movie' , setTrendingMovies);
        getTrending('tv' , setTrendingTv);
        getTrending('person' , setTrendingPeople);
        
      } , []);
    
    return <MediaContext.Provider value={{trendingMovies , trendingTv , trendingPeople}}>

        {props.children}

    </MediaContext.Provider>
}
export default MediaContextProvider;