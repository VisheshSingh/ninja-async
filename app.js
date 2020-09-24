const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', resource);

    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      } else if (xhr.readyState === 4) {
        reject('Could not fetch data');
      }
    });

    xhr.send();
  });
};

// CALLBACK HELL
/* getTodos('todos/mario.json', (err, data) => {
  console.log(data);
  getTodos('todos/luigi.json', (err, data) => {
    console.log(data);
    getTodos('todos/peach.json', (err, data) => {
      console.log(data);
    });
  });
});
 */

// PROMISES
getTodos('todos/mario.json')
  .then((data) => {
    console.log('Promise 1 data: ', data);
    return getTodos('todos/luigi.json');
  })
  .then((data) => {
    console.log('Promise 2 data: ', data);
    return getTodos('todos/peach.json');
  })
  .then((data) => {
    console.log('Promise 3 data: ', data);
  })
  .catch((err) => console.log(err));

// FETCH API
fetch('todos/mario.json')
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
