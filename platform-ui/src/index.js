import React from 'react';
import { render } from 'react-dom';
import { Route, Switch, BrowserRouter, useLocation, Redirect } from 'react-router-dom';
import Header from './js/header.js';
import Body from './js/body.js';
import CoursesBody from './js/courses-body.js';
import EmailBody from './js/email-body.js';
import EmailSendBody from './js/email-send-body.js';
import StudentBookBody from './js/student-book-body.js';
import ChooseMinorBody from './js/choose-minor.js'
import ChooseCourseBody from './js/choose-course.js'
import PointYourCoursesBody from './js/point-your-courses.js'
import PointColleaguesBody from './js/point-colleagues.js'
import BkpKpBody from './js/bkp-kp.js'
import Login from './js/login.js'
import Signup from './js/signup.js'
import Exit from './js/exit.js';
import './css/index.css';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import axios from 'axios'
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();
const Context = React.createContext();

const initialState = {
  auth: {
    isLoggedIn: 0,
    user: null
  },
  route: '/'
}

function reducer(state, action) {
  console.log('update value', action);
  switch(action.type) {
    case 'updateValue':
      return {
        state,
        auth: action.auth,
        route: action.route
      }
    default:
      return state
  }
}

const UserContextProvider = props => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  let location = useLocation();
  // dispatch({type: 'updateValue', auth: state.auth, route: location.pathname});
  console.log('context provider rendered', location);

  const handleLogin = (response) => {
    dispatch({type: 'updateValue', auth: {isLoggedIn: 1, user: response.data.user}, route: location.pathname});
    // customHistory.push("/");
    console.log('user logged in - ', response.data);
  };
  const handleLogout = () => {
    dispatch({type: 'updateValue', auth : {isLoggedIn: -1, user: null}, route: location.pathname});
    console.log('user logged out', location.pathname);
  };
  console.log('state.auth - ', state.auth);
  if (state.auth.isLoggedIn === 0) {
    console.log('pathname - ', location.pathname);
    axios.get('http://localhost:3000/railsapp/logged_in', {withCredentials: true})
      .then(response => {
        if (response.data.logged_in) {
          handleLogin(response);
        } else {
          handleLogout();
        }
      })
      .catch(error => {
        console.log('api errors:', error);
        handleLogout();
      });
  }
  return (
    <Context.Provider
      value={{
        auth: {
          isLoggedIn: state.auth.isLoggedIn,
          user: state.auth.user,
          handleLogin: handleLogin,
          handleLogout: handleLogout
        },
        route: state.route === '/login' ? '/' : location.pathname
      }}
    >
      {props.children}
    </Context.Provider>
  );
};


class App extends React.Component {

  loginForm(auth) {
    console.log('login rendered');
    customHistory.push("/login");
    return <div className="wrapper">
      <Login history={customHistory} handleLogin={auth.handleLogin} loggedInStatus={auth.isLoggedIn === 1}/>
    </div>;
  }

  signupForm(auth) {
    console.log('signup rendered');
    customHistory.push("/signup");
    return <div className="wrapper">
      <Signup history={customHistory} handleLogin={auth.handleLogin} loggedInStatus={auth.isLoggedIn === 1}/>
    </div>;
  }

  body(auth) {
    return (
      <div className="wrapper">
        <Header />
        <Route exact path="/courses" component={CoursesBody}/>
        <Route exact path="/student-book" component={StudentBookBody}/>
        <Route exact path="/email" render={props => (<EmailBody auth={auth}/>)}/>
        <Route exact path="/email-send" render={props => (<EmailSendBody auth={auth}/>)}/>
        <Route exact path="/point-your-courses" component={PointYourCoursesBody}/>
        <Route exact path="/point-colleagues" component={PointColleaguesBody}/>
        <Route exact path="/choose-minor" component={ChooseMinorBody}/>
        <Route exact path="/choose-course" component={ChooseCourseBody}/>
        <Route exact path="/KP-BKP" component={BkpKpBody}/>
        <Route exact path="/" component={Body}/>
        <Route exact path='/login' render={props => (<Login history={customHistory} handleLogin={auth.handleLogin} loggedInStatus={auth.isLoggedIn === 1}/>)}/>
        <Route exact path='/signup' render={props => (<Signup history={customHistory} handleLogin={auth.handleLogin} loggedInStatus={auth.isLoggedIn === 1}/>)}/>
      </div>
    );
  }

  waitForLogin() {
    return <div className="wrapper">
      <Header />
      <p>Подождите...</p>
    </div>
  }

  render() {
    console.log('logged in', this.props);
    console.log('logged in wlp', window.location.pathname);
    if (this.props.auth.isLoggedIn === 1 && window.location.pathname === '/login') {
      customHistory.push("/");
      return <Redirect to='/'/>
    }

    return this.props.auth.isLoggedIn === 1 ? this.body(this.props.auth) :
      this.props.auth.isLoggedIn === 0 ? this.waitForLogin() :
      this.props.route == '/signup' ? this.signupForm(this.props.auth) :
      this.loginForm(this.props.auth);
  }
}

App.contextType = Context;

export default App;

function Index(props) {
  console.log('logged in', props);

  return (
    <BrowserRouter history={customHistory}>
      <Switch>
        <UserContextProvider>
          <Context.Consumer>
          {global => {
            console.log('props - ', global);
            return (
              <>
                <Route exact path="/exit" component={Exit}/>
                <Route path="/" render={props => <App auth={global.auth} route={global.route}/>}/>
              </>
            );
          }}
          </Context.Consumer>
        </UserContextProvider>
      </Switch>
    </BrowserRouter>
  );

}

// ========================================

render(
  <Index />,
  document.querySelector('#root')
);
