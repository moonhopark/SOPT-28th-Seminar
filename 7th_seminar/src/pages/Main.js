import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import Card from '../components/main/Card';
import NewCard from '../components/main/NewCard';
import { getCardData } from '../lib/api';

const MainWrap = Styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  row-gap: 25px;
`;

const Main = ({ year, month, history }) => {
  const [userData, setUserData] = useState(null);
  const [rawData, setRawData] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getCardData();
      setRawData(data);
      data[year] && setUserData(data[year][month]);
    })();
  }, [year, month]);
  
  return (
    <MainWrap>
      {userData &&
        userData.map((data, index) => {
          return (
            <Card 
              key={index} 
              props={data} 
              onClickFunc={() => history.push(`/diary/${data.id}`)} 
            />
          );
      })}
      <NewCard 
        rawData={rawData} 
        year={year} 
        month={month} 
        setUserData={setUserData} 
        id={userData ? userData.length + 1 : 1}
      />
    </MainWrap>
  );
};

export default withRouter(Main);