import axios from 'axios';
import React, {useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { useParams} from 'react-router-dom'



export default function ItemDetails() {

    let {id , media_type} = useParams();
    const [itemDetails, setitemDetails] = useState({})

    async function getItemDetails(id , mediaType) {

        let {data} = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US`)
        setitemDetails(data);
        console.log(data)
    }

    useEffect(()=>{
    
    getItemDetails(id , media_type)
    } , []);

return (
    <>
<Helmet>
                <meta charSet="utf-8" />
                <title>{itemDetails.title}</title>
                
            </Helmet>

    <div className='row'>
        <div className='col-md-3'>

        {itemDetails.poster_path?  <img src={'https://image.tmdb.org/t/p/w500/'+itemDetails.poster_path} className='w-100' alt=''/>
        :<img src={'https://image.tmdb.org/t/p/w500/'+itemDetails.profile_path} className='w-100' alt=''/>}
        </div>

<div className='col-md-9'>
<h2>{itemDetails.title}{itemDetails.name}</h2>
<h6 className='py-2'> Vote: {itemDetails.vote_average? <span className='p-2 text-white '>{itemDetails.vote_average?.toFixed(1)}</span>:'' }</h6>
<h6 className='py-2'> Vote count: {itemDetails.vote_count? <span className='p-2 text-white '>{itemDetails.vote_count?.toFixed(1)}</span>:'' }</h6>
<h6 className='py-2'> popularity: {itemDetails.popularity? <span className='p-2 text-white '>{itemDetails.popularity?.toFixed(1)}</span>:'' }</h6>
<p className='py-2 text-muted'>{itemDetails.overview}</p>







</div>

    </div>


    </>
  )
}
