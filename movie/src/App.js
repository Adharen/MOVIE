import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Movie from './components/Movie';
import Trending from './components/Trending';
import Tv from './components/Tv'
// import Search from './components/Search'
import Mimfo from './Mimfo';

 function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Trending}></Route>
        <Route exact path='/components/Movie' component={Movie}></Route>
        <Route exact path='/components/Tv' component={Tv}></Route>
        {/* <Route exact path='/components/Search' component={Search}></Route> */}
        <Route exact path='/Mimfo/:imdbID/:Year/:Title/:Type'><Mimfo /></Route>
      </Switch>
    </>
  );
}

export default App;
