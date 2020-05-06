import React from 'react';
import axios from 'axios'

export function loadMessages(currentUser, handleResult) {
  let foldersMap = new Map([]);
  foldersMap.set('income', {
    name: 'Входящие',
    messagesMap: new Map([])
  });
  foldersMap.set('outcome', {
    name: 'Исходящие',
    messagesMap: new Map([])
  });
  return axios.get('http://localhost:3000/railsapp/emails.json', {withCredentials: true})
    .then(response => {
      response.data.forEach(msg => {
        if (msg.supplier_id === currentUser.id) {
          foldersMap.get('outcome').messagesMap.set(msg.id, msg);
        }
        if (msg.consumer_id === currentUser.id) {
          foldersMap.get('income').messagesMap.set(msg.id, msg);
        }
      });

      handleResult(foldersMap);
    })
}

export function loadAllDisciplines(handleResult) {
  let coursesMap = new Map([]);
  return axios.get('http://localhost:3000/railsapp/courses.json', {withCredentials: true})
    .then(response => {
      console.log('resp courses - ', response);
      response.data.map(it => coursesMap.set(it.id, {
        courseId: it.id,
        courseName: it.name,
        modsMap: new Map([])
      }));
      return axios.get('http://localhost:3000/railsapp/mods.json', {withCredentials: true})
    })
    .then(response => {
      console.log('resp mods - ', response);
      response.data.map(it => {
        let course = coursesMap.get(it.course_id);
        console.log('course in mods processor - ', course);

        if (course) {
          course.modsMap.set(it.id, {
            modId: it.id,
            modName: it.name,
            disciplinesMap: new Map([])
          })
        }
      })
      return axios.get('http://localhost:3000/railsapp/disciplines.json', {withCredentials: true})
    })
    .then(response => {
      let r = response.data;
      Array.from(coursesMap.values()).map(val => {
        r.map(d => {
          let mod = val.modsMap.get(d.mod_id);
          if (mod) {
            mod.disciplinesMap.set(d.id, {
              disciplineId: d.id,
              disciplineName: d.name,
              marks: []
            })
          }
        })
      })
      console.log('resp disceps - ', response);
      handleResult(coursesMap);
    })
}

export function handleError(promise) {
  return promise.catch(error => console.log('api errors:', error));
}

export function loadUsersById(userIds, handleResult) {
  let usersMap = new Map([]);
  let r = [];
  for (let id of userIds) {
    r.push(axios.get("http://localhost:3000/railsapp/users/" + id + ".json", {withCredentials: true}));
  }
  return axios.all(r)
    .then(axios.spread((...responses) => {
      responses.forEach(r => {
        usersMap.set(r.data.id, r.data);
      })
      handleResult(usersMap);
    }));
}

export function loadUsers(handleResult) {
  let usersMap = new Map([]);
  return axios.get("http://localhost:3000/railsapp/users.json", {withCredentials: true})
    .then(response => {
      response.data.forEach(user => {
        usersMap.set(user.id, user);
      })
      handleResult(usersMap);
    });
}

export function sendMessage(message, handleResult) {
  return axios.post("http://localhost:3000/railsapp/emails.json", {email: message}, {withCredentials: true})
    .then(response => {
      handleResult(response);
    })
}

export function loadEvents(handleResult) {
  return axios.get("http://localhost:3000/railsapp/events.json", {withCredentials: true})
    .then(response => {
      handleResult(response.data);
    })
}
