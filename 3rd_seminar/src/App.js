import React, {useState} from 'react';
import Styled from 'styled-components';

import SearchBar from './components/SearchBar';
import { getUserData } from './lib/api';
import Result from './components/Result';

const MainWrap = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

`;

function App() {
  const [userData, setUserData] = useState({
    status: "idle",
    data: null,
  });

  const getUser = async (id) => {
    setUserData({ ...userData, status: "pending" });
    try {
      const data = await getUserData(id);
      if(data === null) throw Error;
      setUserData({ status: "resolved", data: data });
    } catch(e) {
      setUserData({ status: "rejected", data: null});
    }
    
  }

  return (
    <MainWrap>
      <SearchBar getUser={getUser} />
      <Result userData={userData} />
    </MainWrap>
  );
}

export default App;