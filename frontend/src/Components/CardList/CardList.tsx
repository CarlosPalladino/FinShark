import React from 'react';
import Card from '../Cards/Card/Card';
import { CompanySearch } from '../../api';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  searchResult: CompanySearch[];
}

const CardList: React.FC<Props> = ({ searchResult }) => {
  return (
    <>
      {searchResult.length > 0 ? (
        searchResult.map((result) => (
          <Card
            key={uuidv4()}
            id={result.symbol}
            searchResult={result}
          />
        ))
      ) : (
        <h1>No result!</h1>
      )}
    </>
  );
};

export default CardList;
