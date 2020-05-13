import React from 'react';
import NewsPiece from './news/news_piece.js';
import Event from './events/event.js';
import Email from './email/email.js';
import { loadEvents, handleError } from './data-loader.js'

class Body extends React.Component {
  state = {
    news: null,
    eventsMap: null
  };

  componentDidMount () {
    fetchNews().then(result => {
      console.log('result - ', result);
      this.setState({news: result});
    });
    handleError(
      loadEvents((events) => {
        let eventsMap = new Map([]);
        console.log('events - ', events);
        events.forEach(item => {
          if (eventsMap.has(item.course_id)) {
            eventsMap.get(item.course_id).push(item);
          } else {
            let items = [];
            items.push(item);
            eventsMap.set(item.course_id, items);
          }
        });
        this.setState({
          eventsMap: eventsMap
        });

      })
    )
  }

  render() {
    console.log("body props - ", this.props);
    if (!this.state.eventsMap) {
      return <div></div>;
    }
    return (
      <section className="section">
        <div className="content">
          <h1 className="page-title">Главная</h1>
          <div>
            <div className="cards-header"><h2>Новости</h2></div>
            <div className="cards-link-see-all"><a href="">Смотреть все</a></div>
            <div className="cards">
              {this.state.news && this.state.news.slice(0, 3)}
            </div>
          </div>
          <div>
            <div className="cards-header"><h2>События</h2></div>
            <div className="cards-link-see-all"><a href="">Смотреть все</a></div>
            <div className="cards">
              {events(this.state.eventsMap, this.props.auth.user.course_id)}
            </div>
          </div>
          <div>
            <div className="cards-header"><h2>Сообщения</h2></div>
            <div className="cards-link-see-all"><a href="">Смотреть все</a></div>
            <div className="cards">
              <Email
                  author="Михайлова А.В."
                  status="NEW"
                  time="19 июн 2019, 10:49:44"
                  title="О критериях оценки питча"
                  content="В ЛМС, в папке &quot;Материалы&quot; доступна презентация семинара №9 с критериями оценки питча. С Уважением, Алёшина Т.А. менеджер кафедры менеджмента инноваций НИУ ВШЭ"
              ></Email>
              <Email
                  author="Алёшина Т.А."
                  status="OLD"
                  time="28 май 2019, 13:08:28"
                  title="Изменения в расписании 30 мая"
                  content="Обращаем внимание, в связи с командировкой преподавателей Лодышкина и Коновалюк и конференцией у Ярцева, внесены изменения в расписание майнора - 30 мая. Обновленное расписание можно найти на сайте Областной Думы Сахалина. С Уважением, Алёшина Т.А. менеджер кафедры менеджмента инноваций НИУ ВШЭ"
              ></Email>
              <Email
                  author="Алёшина Т.А."
                  status="OLD"
                  time="20 май 2019, 15:16:07"
                  title="Данные по посещению лекций в весеннем семестре"
                  content="Как и договаривались, во вложении высылаем файл с баллами за посещаемость лекций в текущем семестре (3 и 4 модули). Полный свод данных по посещению лекций будет готов осле 6 июня - последняя лекция у Данте Владимира Владимировича. Просьба написать объяснительную в деканат по пропускам. С Уважением, Алёшина Т.А. менеджер кафедры менеджмента инноваций НИУ ВШЭ"
              ></Email>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

function events(eventsMap, courseNumber) {
  let events = eventsMap.get(courseNumber);
  return events.map(event => <Event
        header={event.title}
        content={event.description}
        type={event.tag.toUpperCase()}
        image={event.imageUrl}
    />);
}

async function fetchNews() {
  return fetch('http://localhost:3000/railsapp/news_pieces.json')
    .then(response => response.json())
    .then(data => {
      console.log('data - ', data);
      return data.map(it => <NewsPiece
            title={it.title}
            time={timeSince(new Date(it.time))}
            content={it.description}
          ></NewsPiece>);
    });
}

function timeSince(date) {

  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + " лет";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " месяцев";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " дней";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " часов";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " минут";
  }
  return Math.floor(seconds) + " секунд";
}

export default Body;
