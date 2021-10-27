import { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import { useDispatch, useSelector } from 'react-redux';
import { refreshToken } from './redux/actions/authAction';
import Alert from './components/notify/Alert';
import Header from './components/header/Header';
import PageRender from './customRouter/PageRender';
import Register from './pages/register';
import PrivateRouter from './customRouter/PrivateRouter';

function App() {
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(refreshToken())
  }, [dispatch])
  return (
    <Router>
      <Alert/>
      <input type="checkbox" id="theme" />
      <div className="App">
        <div className="main">
          { auth.token && <Header /> }
        <Route exact path="/" component={auth.token ? Home : Login}></Route>
        <Route exact path="/register" component={Register}></Route>

          <PrivateRouter exact path="/:page" component={PageRender}></PrivateRouter>
          <PrivateRouter exact path="/:page/:id" component={PageRender}></PrivateRouter>
        </div>
      </div>
    </Router>

  );
}

export default App;
