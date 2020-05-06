import React from 'react';
import NewsPiece from './news/news_piece.js';
import Event from './events/event.js';
import Email from './email/email.js';
import { loadEvents, handleError } from './data-loader.js'

class Body extends React.Component {
  state = {
    news: null
  };

  componentDidMount () {
    fetchNews().then(result => {
      console.log('result - ', result);
      this.setState({news: result});
    });
    handleError(
      loadEvents((events) => console.log('events - ', events))
    )
  }

  render() {
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
              <Event
                  header="День Вышки"
                  content="4 сентября в &laquo;Парк Горького&laquo;"
                  type="EVENT"
                  image="https://images.unsplash.com/photo-1517463859029-c01164a5505a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80"
              ></Event>
              <Event
                  header="Просмотр по технологиям дизайна"
                  content="9 октября в 265 аудитории"
                  type="DEADLINE"
                  image="https://images.unsplash.com/photo-1518347257504-c8ff93b3edb7?ixlib=rb-1.2.1&auto=format&fit=crop&w=3368&q=80"
              ></Event>
              <Event
                  header="Просмотр по Английскому языку"
                  content="9 октября в 265 аудитории"
                  type="DEADLINE"
                  image="https://images.unsplash.com/photo-1586791910032-5082330c9b00?ixlib=rb-1.2.1&auto=format&fit=crop&w=969&q=80"
              ></Event>
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
