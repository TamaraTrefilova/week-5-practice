
import './App.css';
import GithubUserSearch from './GithubUserSearch';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import GithubUser from './GitHubUser'

function NavBar() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li><Link to="/github/search">GitHub search</Link></li>
      <li><Link to="/github/users/tamaratrefilova">Tamara's GitHub</Link></li>
      <li><Link to="/github/users/kbnewlon">Kayla's GitHub</Link></li>
    </ul>

  )
}


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' >
            <h1>Home</h1>
          </Route>
          <Route exact path='/github/search' component ={GithubUserSearch} />
          <Route path='/github/users/:username'>                   
          <GithubUser/>
          </Route>
        </Switch>

      </Router>

    </div>
  );
}

export default App;
