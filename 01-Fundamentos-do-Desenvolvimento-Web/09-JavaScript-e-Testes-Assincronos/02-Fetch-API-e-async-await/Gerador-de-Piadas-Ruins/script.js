const API_URL = "https://icanhazdadjoke.com/";

const joke = document.querySelector("#jokeContainer");
const button = document.querySelector("#btn");

const fetchJoke = async () => {
  const myObject = {
    method: "GET",
    headers: { Accept: "application/json" },
  };
  let responseMessage = "";
  await fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => (responseMessage = data.joke))
    .catch(
      (error) =>
        (responseMessage = `Something is wrong! \n${error} \nTry reset or reload`)
    );
  return (joke.innerHTML = responseMessage);
  // console.log(responseMessage);
};

window.onload = () => fetchJoke();

button.addEventListener("click", fetchJoke);
