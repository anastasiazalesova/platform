import React from 'react';
import NewsPiece from './news/news_piece.js';
import Event from './events/event.js';
import Email from './email/email.js';
import Select from 'react-select';
import EmailDataMock from './data_mock/email-data-mock.js'
import EmailSendScroll from './email/email-send-scroll.js'
import { Redirect } from 'react-router-dom';
import { loadUsers, sendMessage, handleError } from './data-loader.js'

const mock = new EmailDataMock();

class EmailSendBody extends React.Component {

  componentWillMount() {
    handleError(
      loadUsers((usersMap) => {
        this.setState({
          usersMap: usersMap
        })
      })
    )
  }

  state = {
    sended: false,
    selectedMessage: null,
    usersMap: null,
    itemsRefs: []
  };

  handleClick = (author) => {
    console.log('author selected - ', author);
    this.setState({

      selectedAthor: author
    });
  }

  updateTheme = (evt) => {
    this.setState({
      themeInputValue: evt.target.value
    });
  }

  updateBody = (evt) => {
    this.setState({
      bodyInputValue: evt.target.value
    });
  }

  render() {
    console.log('props in email sender body - ', this.props);
    const { usersMap, sended, author } = this.state;

    if (!usersMap) {
      return <div></div>;
    }
    if (sended) {
      return <Redirect to="/email"/>;
    }
    let items = Array.from(usersMap.values()).map((it) => {
      let ref = React.createRef();
      this.state.itemsRefs.push(ref);
      console.log('user for displaying - ', it);
      return <EmailSendScroll author={it} ref={ref} handleClick={this.handleClick} />;
    });

    this.state.itemsRefs.forEach(it => {
      if (it.current && this.state.selectedAthor !== it.current.state.author) {
        it.current.selectedFalse();
      }
    });

    return (
      <section className="section">

        <h1 className="page-title">Сообщения</h1>
        <div className="content">
          <div className="main">
            <div className="email-send-main-left">
              <div className="email-send-main-left-header"><p>Все</p></div>
              <div className="email-scroll-view">
                {items}
              </div>
            </div>
            <div className="main-right">
              <div onClick={() => {
                if (!this.state.selectedAthor) {
                  return;
                }
                let msgToSend = {
                  supplier_id: this.props.auth.user.id,
                  consumer_id: this.state.selectedAthor.id,
                  title: this.state.themeInputValue,
                  body: this.state.bodyInputValue
                }
                sendMessage(msgToSend, (response) => {
                  this.setState({
                    sended: true
                  });
                });
              }}><a href="#" className="square_btn">Отправить</a></div>
              <input className='email-theme-send-input' type='text' onChange={this.updateTheme} placeholder="Тема письма"/>
              <textarea className='email-body-send-input' type='text' onChange={this.updateBody} placeholder="Введите текст сообщения"/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default EmailSendBody;
