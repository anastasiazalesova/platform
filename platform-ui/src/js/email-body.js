import React from 'react';
import NewsPiece from './news/news_piece.js';
import Event from './events/event.js';
import Email from './email/email.js';
import Select from 'react-select';
import EmailDataMock from './data_mock/email-data-mock.js'
import EmailScroll from './email/email-scroll.js'
import { loadMessages, loadUsersById, handleError } from './data-loader.js'


const mock = new EmailDataMock();

class EmailBody extends React.Component {

  componentWillMount() {
    let foldersMapTmp;
    console.log('user auth - ', this.props);
    handleError(
      loadMessages(this.props.auth.user, (foldersMap) => {
        console.log('foldersMap - ', foldersMap);
        foldersMapTmp = foldersMap;

      }).then(() => {
        let users = new Set([]);
        Array.from(foldersMapTmp.values()).forEach(folder => {
          Array.from(folder.messagesMap.values()).forEach(msg => {
            users.add(msg.supplier_id);
            users.add(msg.consumer_id);
          });
        });
        return loadUsersById(Array.from(users.entries()), (usersMap) => {
          Array.from(foldersMapTmp.values()).forEach(folder => {
            Array.from(folder.messagesMap.values()).forEach(msg => {
              msg.supplier = usersMap.get(msg.supplier_id);
              msg.consumer = usersMap.get(msg.consumer_id);
            })
          })

          let options = Array.from(foldersMapTmp.entries()).map(pair => {
            return {
              value: pair[0],
              label: pair[1].name
            }
          });
          console.log('options - ', options);
          this.setState({
            foldersMap: foldersMapTmp,
            selectedOption: options[0],
            options: options
          })
        });
      })
    )
  }

  state = {
    selectedOption: mock.getFolders()[0],
    selectedMessage: null,
    foldersMap: null,
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
    const { selectedOption, foldersMap, options } = this.state;

    if (!selectedOption || !foldersMap) {
      return <div></div>;
    }

    let items = Array.from(foldersMap.get(selectedOption.value).messagesMap.values()).map((it) => {
      console.log('selectedOption: ', selectedOption);
      let message = { ...it };
      if (selectedOption.value === 'outcome') {
        message.new = 0;
      }
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
                    options={options}
                    classNamePrefix="email-dir-combo-box"
                  />
                </div>
              </div>
              <div className="email-scroll-view">
                {items}
              </div>
            </div>
            <div className="main-right">
              <div><a href="/email-send" className="square_btn">Написать письмо</a></div>
              {this.state.selectedMessage && <>
                <div className="email-selected-message-header">
                  <div className="email-selected-message-header-author">{this.state.selectedMessage.author}</div>
                  <div className="email-selected-message-header-time">{this.state.selectedMessage.created_at}</div>
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
