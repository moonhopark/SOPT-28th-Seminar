import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import Diary from './pages/Diary';
import MainHeader from './components/common/MainHeader';
import Calendar from './components/common/Calendar'
import Title from './components/common/Title'
import Footer from './components/common/Footer'

function App() {
  return (
    <>
      <MainHeader />
      <Calendar />
      <Title />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/diary/:id" component={Diary} />
          <Route component={() => <div>Page Not found</div>} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
