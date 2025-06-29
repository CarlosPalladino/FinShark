import React, { JSX } from 'react'
import "./Card.css"
import { CompanySearch } from '../../../api';
import { Link } from 'react-router-dom';


interface props {
id : string;
searchResult : CompanySearch;
}

const Card: React.FC<props> = ({id,searchResult}: props) : JSX.Element => {
  return (
    <div className='all'>
      <h1>{id}</h1>
      <h1>{searchResult.name}</h1>
      <h1>{searchResult.symbol}</h1>
      <h1>{searchResult.exchange}</h1>
<Link to={`/detail/${searchResult.symbol}`}> 
 <button className="button">Detalleee</button>
</Link>
</div>
  )
}

export default Card
