import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import PlayerList from './components/PlayerList';
import PlayerDetail from './components/PlayerDetail';
import AddReview from './components/AddReview';
import Ranking from './components/Ranking';
import UserProfile from './components/UserProfile';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/players/:id" component={PlayerDetail} />
        <Route path="/players" component={PlayerList} />
        <Route path="/add-review/:playerId" component={AddReview} />
        <Route path="/ranking" component={Ranking} />
        <Route path="/profile" component={UserProfile} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/" component={PlayerList} />
      </Switch>
    </Router>
  );
}

export default App;
