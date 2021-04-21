
import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import RecommendedVideos from './components/RecommendedVideos/RecommendedVideos.js';

// routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  //state variable for search query
  const [search, setSearch] = useState('');

  return (
    <div className="app">
      <Router>
        <Header onChange={(inputSearch) => setSearch(inputSearch)}/>
        <Switch>
          <Route path="/">
            <div className="app__page">
              <Sidebar />
              <RecommendedVideos search={search}/>
            </div>
          </Route>
        </Switch>
      
      </Router>
    </div>
  );
}

export default App;
  