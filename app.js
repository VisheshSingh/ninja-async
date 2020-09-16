const getTodos = (callback) => {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', `https://jsonplaceholder.typicode.com/todos`);

  xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(undefined, JSON.parse(xhr.responseText));
    } else if (xhr.readyState === 4) {
      callback('Could not fetch data', undefined);
    }
  });

  xhr.send();
};

console.log(1);
console.log(2);
getTodos((err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
console.log(3);
console.log(4);
