import React from 'react';
import NewsPiece from './news/news_piece.js';
import Event from './events/event.js';
import Email from './email/email.js';
import Select from 'react-select';
import EmailDataMock from './data_mock/email-data-mock.js'
import EmailScroll from './email/email-scroll.js'

const mock = new EmailDataMock();

class EmailBody extends React.Component {

  state = {
    selectedOption: mock.getFolders()[0],
    selectedMessage: null,
    itemsRefs: []
  };

  handleChange = selectedOption => {
    this.setState(
      { 
        selectedOption
      },
      () => console.log(`Option selected:`, this.state.selectedOption)
    );
  };

  handleClick = (message) => {
    this.setState({
      selectedMessage: message
    });
  }

  render() {
    const { selectedOption } = this.state;

    let items = mock.getMessagesByFolderId(selectedOption.value).map((it) => {
      console.log('selectedOption: ', selectedOption);
      let message = it;
      let ref = React.createRef();
      this.state.itemsRefs.push(ref);
      return <EmailScroll message={message} ref={ref} handleClick={this.handleClick} />;
    });

    this.state.itemsRefs.forEach(it => {
      if (it.current && this.state.selectedMessage !== it.current.state.message) {
        it.current.selectedFalse();
      }
    });

    return (
      <section className="section">

        <h1 className="page-title">Сообщения</h1>
        <div className="content">
          <div className="main">
            <div className="email-main-left">
              <div className="email-main-left-header">
                <div className="email-main-left-header-folder"><p>Папка: </p></div>
                <div className="email-main-left-header-folder-selector">
                  <Select
                    styles={{borderRadius: '14px'}}
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={mock.getFolders()}
                    classNamePrefix="email-dir-combo-box"
                  />
                </div>
              </div>
              <div className="email-scroll-view">
                {items}
              </div>
            </div>
            <div className="main-right">
              {this.state.selectedMessage && <>
                <div className="email-selected-message-header">
                  <div className="email-selected-message-header-author">{this.state.selectedMessage.author}</div>
                  <div className="email-selected-message-header-time">{this.state.selectedMessage.time}</div>
                </div>
                <div className="email-selected-message-title"><h1>{this.state.selectedMessage.title}</h1></div>
                <div className="email-selected-message-body">{this.state.selectedMessage.body}</div>
                </>
              }
            </div>
          </div>
        </div>
      </section>
    );
  } 
}

export default EmailBody;