import React, {useEffect, useState} from 'react';

import SearchBar from './components/SearchBar';
import ResultCard from './components/ResultCard';
import { getUserData } from './lib/api';

function App() {
  const [userData, setUserData] = useState("");

  const getUser = async (id) => {
    const data = await getUserData(id);
    setUserData(data);
  }

  useEffect(() => {
    getUser("moonhopark");
  }, []);

  return (
    <>
      <SearchBar />
      <ResultCard userData={userData} />
    </>
  );
}

export default App;