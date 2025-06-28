import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CompanyProfile } from '../../../api';
import detaCompany from '../../../Pages/apis'; // tu función de fetch con axios

const Detail: React.FC = () => {
  const { symbol } = useParams<{ symbol: string }>();
  const [data, setData] = useState<CompanyProfile | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (symbol) {
      detaCompany(symbol).then((res) => {
        if (Array.isArray(res)) {
          setData(res[0]);
        } else {
          setError("No se pudo cargar el perfil.");
        }
      });
    }
  }, [symbol]);

  if (error) return <h2 style={{ color: 'red' }}>{error}</h2>;
  if (!data) return <h2>Cargando...</h2>;

  return (
    <div className="info">
      <h1>{data.companyName}</h1>
      <h2>CEO: {data.ceo}</h2>
      <h3>Industria: {data.industry}</h3>
      <p>{data.description}</p>
      <img src={data.image} alt={data.companyName} style={{ maxHeight: '100px' }} />
    </div>
  );
};

export default Detail;
