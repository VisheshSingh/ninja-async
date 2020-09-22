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
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
