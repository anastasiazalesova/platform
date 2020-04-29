import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import useDocumentScrollThrottled from './useDocumentScrollThrottled.js';

function Header(props) {
  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

  const MINIMUM_SCROLL = 80;
  const TIMEOUT_DELAY = 400;

  useDocumentScrollThrottled(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setShouldShowShadow(currentScrollTop > 2);

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });

  const shadowStyle = shouldShowShadow ? 'shadow' : '';
  const hiddenStyle = shouldHideHeader ? 'hidden' : '';
  console.log(props.match);
  return (
    <header className={`header ${shadowStyle} ${hiddenStyle}`}>
      <div className="logo"><a href="/">LMS</a></div>
      <div className="flexbox">
        <div className="search">
          <div>
            <input type="text" placeholder="       Search . . ." required></input>
          </div>
        </div>
      </div>
      <ul className="links">
        <Route path="/courses" children={(props) => (
          props.match ?
            <li className="link-item" id="my-courses"><a href="/courses" style={{color: '#000'}}>Мои курсы</a></li> :
            <li className="link-item" id="my-courses"><a href="/courses">Мои курсы</a></li>
        )}/>
        <Route path="/student-book" children={(props) => (
          props.match ?
            <li className="link-item" id="student-book"><a href="/student-book" style={{color: '#000'}}>Зачетка</a></li> :
            <li className="link-item" id="student-book"><a href="/student-book">Зачетка</a></li>
        )}/>
        <Route path="/schedule" children={(props) => (
          props.match ?
            <li className="link-item" id="schedule"><a href="/schedule" style={{color: '#000'}}>Расписание</a></li> :
            <li className="link-item" id="schedule"><a href="/schedule">Расписание</a></li>
        )}/>
        <Route path="/all-sections" children={(props) => (
          props.match ?
            <li className="link-item" id="all-sections"><a href="/all-sections" style={{color: '#000'}}>Все разделы</a></li> :
            <li className="link-item" id="all-sections"><a href="/all-sections">Все разделы</a></li>
        )}/>
        <Route path="/chat" children={(props) => (
          props.match ?
            <li className="link-item" id="chat"><a href="/email" style={{color: '#000'}}><img src="chat.png"></img></a></li> :
            <li className="link-item" id="chat"><a href="/email"><img src="chat.png"></img></a></li>
        )}/>
        <Route path="/profile" children={(props) => (
          props.match ?
            <li className="link-item" id="profile"><a href="/profile" style={{color: '#000'}}><img src="profile.png"></img></a></li> :
            <li className="link-item" id="profile"><a href="/profile"><img src="profile.png"></img></a></li>
        )}/>
        <Route path="/exit" children={(props) => (
          props.match ?
            <li className="link-item" id="exit"><a href="/exit" style={{color: '#000'}}>Выйти</a></li> :
            <li className="link-item" id="exit"><a href="/exit">Выйти</a></li>
        )}/>
      </ul>
    </header>
  );
}

export default Header;