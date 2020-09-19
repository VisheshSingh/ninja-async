const getTodos = (resource, callback) => {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', resource);

  xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(undefined, JSON.parse(xhr.responseText));
    } else if (xhr.readyState === 4) {
      callback('Could not fetch data', undefined);
    }
  });

  xhr.send();
};

getTodos('todos/mario.json', (err, data) => {
  console.log(data);
  getTodos('todos/luigi.json', (err, data) => {
    console.log(data);
    getTodos('todos/peach.json', (err, data) => {
      console.log(data);
    });
  });
});
