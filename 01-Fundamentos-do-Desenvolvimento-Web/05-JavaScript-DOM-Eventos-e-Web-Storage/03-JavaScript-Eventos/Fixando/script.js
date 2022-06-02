const firstLi = document.getElementById("first-li");
const secondLi = document.getElementById("second-li");
const thirdLi = document.getElementById("third-li");

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

const li = document.querySelectorAll("li");

for (let index = 0; index < li.length; index += 1) {
  li[index].addEventListener("click", techClickedToLi);
}

function cleanClassTech() {
  for (let index = 0; index < li.length; index += 1) {
    if (li[index].className === "tech") {
      li[index].classList.remove("tech");
    }
  }
  console.log(li);
}

function techClickedToLi(li) {
  if (li.target.className === "tech") {
    console.log("tem tech");
  } else {
    cleanClassTech();
    li.target.className = "tech";
    console.log("nao tem tech");
  }
}

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

const input = document.getElementById("input");

input.addEventListener("change", techTextChange);

function techTextChange() {
  let itemTech = document.querySelector(".tech");
  itemTech.innerText = input.value;
  input.value = "";
}

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?

const spotrybefy = document.querySelector("h1");

spotrybefy.addEventListener("dblclick", openPortfolio);

function openPortfolio() {
  window.load = window.open("https://vitorbss12.github.io/", "_blank");
}

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

const myWebpage = document.getElementById("my-spotrybefy");

myWebpage.addEventListener("mouseover", top3ColorChange);
myWebpage.addEventListener("mouseout", top3ColorReturn);

function top3ColorChange(top3) {
  top3.target.style.color = "#2fc18c";
}

function top3ColorReturn(top3) {
  top3.target.style.color = "white";
}
