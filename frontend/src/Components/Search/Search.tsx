import React,{ChangeEvent, useState, SyntheticEvent, FormEvent} from 'react'
import { JSX } from 'react/jsx-runtime';

interface props  {
onClick:(e:SyntheticEvent) => void;
search : string | undefined;
handlerChange:  (e : ChangeEvent<HTMLInputElement>) => void;
};
const Search : React.FC<props>= ({onClick,search,handlerChange} : props): JSX.Element => {
     
  return (
    <div>
      <input value={search}  onChange={(e) => handlerChange(e)}></input> 
      <button onClick={onClick}>Buscar</button>
    </div>
  )
}

export default Search
