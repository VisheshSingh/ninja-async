const xhr = new XMLHttpRequest();

xhr.open('GET', `https://jsonplaceholder.typicode.com/todos`);

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === 4) {
    console.log(JSON.parse(xhr.responseText));
  }
});

xhr.send();
