
import Media from '../Media/Media';
import {Helmet , HelmetProvider } from "react-helmet-async"
import { useContext } from 'react';
import { MediaContext } from '../Context/Context';

export default function Home() {

let {trendingMovies , trendingPeople , trendingTv} = useContext(MediaContext);


  return (
    <>
    <HelmetProvider >
<Helmet>
        <title>Home Page</title>
      
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

      {trendingMovies.slice(0,10).map((item , index)=> <Media key={index} item={item} />)}

    </div>

    
    <div className='row py-5'>

      <div className='col-md-4 d-flex align-items-center'>
          <div>
            
          <div className='border w-25 mb-3'></div>
                  <h2 className='h4'>Trending <br/>Tv<br/>To Watch Right Now </h2>
                  <p className='py-2 text-muted'>Watch Tv to watch Right Now </p>
                  <div className='border w-100 mb-3'></div>
          </div>
      </div>

      {trendingTv.slice(0,10).map((item , index)=> <Media key={index} item={item} />)}

    </div>


    <div className='row py-5'>

      <div className='col-md-4 d-flex align-items-center'>
          <div>
            
          <div className='border w-25 mb-3'></div>
                  <h2 className='h4'>Trending <br/>People<br/>To Watch Right Now </h2>
                  <p className='py-2 text-muted'>Watch People to watch Right Now </p>
                  <div className='border w-100 mb-3'></div>
          </div>
      </div>

      {trendingPeople.filter((person)=>person.profile_path!==null).slice(0,10).map((item , index)=> <Media key={index} item={item} />)}

    </div>


    


   
    </>
  )
}
