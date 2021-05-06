import React, {useEffect} from 'react';

import SearchBar from './components/SearchBar';
import ResultCard from './components/ResultCard';
import { getUserData } from './lib/api';

function App() {
  useEffect(() => {
    getUserData("moonhopark");
  }, []);

  return (
    <>
      <SearchBar />
      <ResultCard />
    </>
  );
}

export default App;