import React, {useState} from 'react';
import Styled from 'styled-components';

import SearchBar from './components/SearchBar';
import ResultCard from './components/ResultCard';
import { getUserData } from './lib/api';

const MainWrap = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

`;

function App() {
  const [userData, setUserData] = useState("");

  const getUser = async (id) => {
    const data = await getUserData(id);
    setUserData(data);
  }

  return (
    <MainWrap>
      <SearchBar getUser={getUser} />
      <ResultCard userData={userData} />
    </MainWrap>
  );
}

export default App;