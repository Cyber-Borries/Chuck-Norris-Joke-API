//async/away function to fetch the api and allow us to continue with the app while the api loads
const request = async () => {
  const res = await fetch("http://api.icndb.com/jokes/random/3");
  const result = await res.json();
  let value = result.value;
  console.log(value);
  return value;
};
request();
//declared a variable to tell js where to append the jokes
const container = document.getElementById("container");
//a promise to get the data that was fetched above and then append it to the DOM
request().then((data) => {
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    console.log(data);
    const jokeData = data[i];
    const { joke, id } = jokeData;

    console.log(joke);
    container.innerHTML += `
    <div class="card">
      <p>${joke}</p> 
    </div>
  `;
  }
});

// const bookData = data[0];
// const { volumeInfo } = bookData;
// const { title, description } = volumeInfo;
