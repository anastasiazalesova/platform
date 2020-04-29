import React from 'react';
import { render } from 'react-dom';
import { Route, Switch, BrowserRouter, useLocation } from 'react-router-dom';
import Header from './js/header.js';
import Body from './js/body.js';
import CoursesBody from './js/courses-body.js';
import EmailBody from './js/email-body.js';
import StudentBookBody from './js/student-book-body.js';
import Exit from './js/exit.js';
import './css/index.css';
import ReactDOM from 'react-dom';
import Select from 'react-select';

function App(props) {
  let location = useLocation();
  console.log(location.pathname);
  console.log(location);
  return (
    <div className="wrapper">
      <Header />
      <Route exact path="/courses" component={CoursesBody}/>
      <Route exact path="/student-book" component={StudentBookBody}/>
      <Route exact path="/email" component={EmailBody}/>
      <Route exact path="/" component={Body}/>
    </div>
  );
}

export default App;

function Index() {
  return (
    <Switch>
      <Route exact path="/exit" component={Exit}/>
      <Route path="/" component={App}/>
    </Switch>
  );
}

// ========================================

render(
  <BrowserRouter>
    <Index />
  </BrowserRouter>,
  document.querySelector('#root')
);

