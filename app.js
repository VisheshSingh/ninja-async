const xhr = new XMLHttpRequest();

xhr.open('GET', `https://jsonplaceholder.typicode.com/todos`);

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText));
  } else if (xhr.readyState === 4) {
    console.log('Could not fetch data');
  }
});

xhr.send();
