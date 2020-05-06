import React, { useState } from 'react';
import { Route, Link} from 'react-router-dom';

import useDocumentScrollThrottled from './useDocumentScrollThrottled.js';

function Header(props) {
  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);
  const [shoundShowAllSections, setShoundShowAllSections] = useState(false);

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
  const allSectionsStyle = shoundShowAllSections && !shouldHideHeader ? 'header-all-sections' : 'header-all-sections-hidden';
  console.log('hover?', allSectionsStyle);
  return (
    <header className={`header ${shadowStyle} ${hiddenStyle}`} onMouseLeave={() => {setShoundShowAllSections(false)}}>
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
            <li className="link-item" id="my-courses" onMouseEnter={() => {setShoundShowAllSections(false)}}><a href="/courses" style={{color: '#000'}}>Мои курсы</a></li> :
            <li className="link-item" id="my-courses" onMouseEnter={() => {setShoundShowAllSections(false)}}><a href="/courses">Мои курсы</a></li>
        )}/>
        <Route path="/student-book" children={(props) => (
          props.match ?
            <li className="link-item" id="student-book" onMouseEnter={() => {setShoundShowAllSections(false)}}><a href="/student-book" style={{color: '#000'}}>Зачетка</a></li> :
            <li className="link-item" id="student-book" onMouseEnter={() => {setShoundShowAllSections(false)}}><a href="/student-book">Зачетка</a></li>
        )}/>
        <Route path="/schedule" children={(props) => (
          props.match ?
            <li className="link-item" id="schedule" onMouseEnter={() => {setShoundShowAllSections(false)}}><a href="/schedule" style={{color: '#000'}}>Расписание</a></li> :
            <li className="link-item" id="schedule" onMouseEnter={() => {setShoundShowAllSections(false)}}><a href="/schedule">Расписание</a></li>
        )}/>
        <Route path="/all-sections" children={(props) => (
          props.match ?
            <li className="link-item" id="all-sections" onMouseEnter={() => {setShoundShowAllSections(true)}}><a href="/all-sections" style={{color: '#000'}}>Все разделы</a></li> :
            <li className="link-item" id="all-sections" onMouseEnter={() => {setShoundShowAllSections(true)}}><a href="/all-sections">Все разделы</a></li>
        )}/>
        <Route path="/chat" children={(props) => (
          props.match ?
            <li className="link-item" id="chat" onMouseEnter={() => {setShoundShowAllSections(false)}}><a href="/email" style={{color: '#000'}}><img src="chat.png"></img></a></li> :
            <li className="link-item" id="chat" onMouseEnter={() => {setShoundShowAllSections(false)}}><a href="/email"><img src="chat.png"></img></a></li>
        )}/>
        <Route path="/profile" children={(props) => (
          props.match ?
            <li className="link-item" id="profile" onMouseEnter={() => {setShoundShowAllSections(false)}}><a href="/profile" style={{color: '#000'}}><img src="profile.png"></img></a></li> :
            <li className="link-item" id="profile" onMouseEnter={() => {setShoundShowAllSections(false)}}><a href="/profile"><img src="profile.png"></img></a></li>
        )}/>
        <Route path="/exit" children={(props) => (
          props.match ?
            <li className="link-item" id="exit" onMouseEnter={() => {setShoundShowAllSections(false)}}><a href="/exit" style={{color: '#000'}}>Выйти</a></li> :
            <li className="link-item" id="exit" onMouseEnter={() => {setShoundShowAllSections(false)}}><a href="/exit">Выйти</a></li>
        )}/>
      </ul>
      <div className={`${allSectionsStyle}`} onMouseEnter={() => {setShoundShowAllSections(true)}} onMouseLeave={() => {setShoundShowAllSections(false)}}>
        <div className="header-all-sections-container">
          <div className="header-all-sections-column">
            <div className="header-all-sections-card">НЕ ЗАБУДЬ ОЦЕНИТЬ</div>
            <Link to="/point-your-courses">
              <div className="header-all-sections-card">
                <div className="header-all-sections-icon"><img src="/point-your-courses.png"/></div>
                <div className="header-all-sections-title"><p>Оцени свои курсы</p></div>
              </div>
            </Link>
            <Link to="/point-colleagues">
              <div className="header-all-sections-card">
                <div className="header-all-sections-icon"><img src="/point-colleagues.png"/></div>
                <div className="header-all-sections-title"><p>Оценка сотрудников</p></div>
              </div>
            </Link>
          </div>
          <div className="header-all-sections-column">
            <div className="header-all-sections-card">ВЫБОР ДИСЦИПЛИН И ТЕМ</div>
            <Link to="/choose-minor">
              <div className="header-all-sections-card">
                <div className="header-all-sections-icon"><img src="/choose-minor.png"/></div>
                <div className="header-all-sections-title"><p>Выбор майнора</p></div>
              </div>
            </Link>
            <Link to="/choose-course">
              <div className="header-all-sections-card">
                <div className="header-all-sections-icon"><img src="/choose-course.png"/></div>
                <div className="header-all-sections-title"><p>Курсы по выбору</p></div>
              </div>
            </Link>
            <Link to="/themes-KP-BKP">
              <div className="header-all-sections-card">
                <div className="header-all-sections-icon"><img src="/themes-KP-BKP.png"/></div>
                <div className="header-all-sections-title"><p>Темы KP/BKP</p></div>
              </div>
            </Link>
            <Link to="/KP-BKP">
              <div className="header-all-sections-card">
                <div className="header-all-sections-icon"><img src="/KP-BKP.png"/></div>
                <div className="header-all-sections-title"><p>KP/BKP</p></div>
              </div>
            </Link>
          </div>
          <div className="header-all-sections-column">
            <div className="header-all-sections-card">ЗАЯВКИ</div>
            <Link to="/req-pgas">
              <div className="header-all-sections-card">
                <div className="header-all-sections-icon"><img src="/req-pgas.png"/></div>
                <div className="header-all-sections-title"><p>Заявка на ПГАС</p></div>
              </div>
            </Link>
            <Link to="/transfer">
              <div className="header-all-sections-card">
                <div className="header-all-sections-icon"><img src="/transfer.png"/></div>
                <div className="header-all-sections-title"><p>Перевод</p></div>
              </div>
            </Link>
            <Link to="/relocation">
              <div className="header-all-sections-card">
                <div className="header-all-sections-icon"><img src="/relocation.png"/></div>
                <div className="header-all-sections-title"><p>Переезд из общежития</p></div>
              </div>
            </Link>
            <Link to="/practic-req">
              <div className="header-all-sections-card">
                <div className="header-all-sections-icon"><img src="/practic-req.png"/></div>
                <div className="header-all-sections-title"><p>Заявка на практику</p></div>
              </div>
            </Link>
            <Link to="/vbm-req">
              <div className="header-all-sections-card">
                <div className="header-all-sections-icon"><img src="/vbm-req.png"/></div>
                <div className="header-all-sections-title"><p>Заявка на ВБМ</p></div>
              </div>
            </Link>
          </div>
          <div className="header-all-sections-column">
          <div className="header-all-sections-card">ПОМОЩЬ</div>
          <Link to="/support">
            <div className="header-all-sections-card">
              <div className="header-all-sections-icon"><img src="/support.png"/></div>
              <div className="header-all-sections-title"><p>Служба поддержки</p></div>
            </div>
          </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;