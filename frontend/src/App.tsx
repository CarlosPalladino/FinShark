import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { CompanySearch } from './api';
import SearchCompanies from './Pages/apis';
import { Outlet, useLocation } from 'react-router-dom';

function App() {

  const [search, seatSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([])
  const [serverError, setserverError] = useState<string>("");
  const[loading,setLoading] =useState(false);
  const[error,setError] =useState('');

  const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoading(true)
    setError('');
    seatSearch(e.target.value);
    console.log(e);
  };
  const onClick = async (e: SyntheticEvent) => {
    const result = await SearchCompanies(search);

    if (typeof result === "string") {
      setserverError(result)
    }
    else if (Array.isArray(result.data)) {
      console.log('Resultado de la API:', result.data);
      
          setSearchResult(result.data.slice(0,3));
    }
 else {
      setError(`No se encontraron resultados para: ${search}`);
    }
  };
  useEffect(() => {
    console.log('searchResult actualizado:', searchResult);
  }, [searchResult]);

  return (
    <div className="App">
      <Search onClick={onClick} search={search} handlerChange={handlerChange} />
      {loading && <h3>Cargando resultados...</h3>}
  {error && <h3 style={{ color: 'red' }}>{error}</h3>}
      {serverError && <h1>{serverError}</h1>}
      <CardList searchResult={searchResult} />
    </div>
  );
}

export default App
