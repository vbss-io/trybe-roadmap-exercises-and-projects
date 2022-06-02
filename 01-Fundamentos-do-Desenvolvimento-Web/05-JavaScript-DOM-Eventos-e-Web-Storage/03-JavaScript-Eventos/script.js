function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// 1 - Adicionar os dias do mês, sinalizando feriados e sextas-feiras

function checkFridayOrHolliday(day) {
  const currentDay = day;
  if (currentDay.innerHTML === "24" || currentDay.innerHTML === "31") {
    return "day holiday";
  }

  if (
    currentDay.innerHTML === "4" ||
    currentDay.innerHTML === "11" ||
    currentDay.innerHTML === "18"
  ) {
    return "day friday";
  }

  if (currentDay.innerHTML === "25") {
    return "day holiday friday";
  }
  return "day";
}

function createDaysOfTheMonth() {
  const dezDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const monthDaysList = document.getElementById("days");

  for (let index = 0; index < dezDaysList.length; index += 1) {
    const days = dezDaysList[index];
    const monthDays = document.createElement("li");
    monthDays.innerHTML = days;

    monthDays.className = checkFridayOrHolliday(monthDays);

    monthDaysList.appendChild(monthDays);
  }
}

createDaysOfTheMonth();

// 2 - Crie botão dinamicamente com aa string feriados

function createButtonHolidays(string) {
  const stringHolidays = string;
  const buttonsContainer = document.querySelector(".buttons-container");

  const buttonHolidays = document.createElement("button");
  buttonHolidays.innerHTML = stringHolidays;
  buttonHolidays.setAttribute("id", "btn-holiday");

  buttonsContainer.appendChild(buttonHolidays);
}

createButtonHolidays("Feriados");

// 3 - Implemente um evento que sinalize os dias de feriado ao apertar o botão e limpe caso aperte novamente

function cleanBackgroun() {
  const holiday = document.querySelectorAll(".holiday");
  for (let index = 0; index < holiday.length; index += 1) {
    holiday[index].style.backgroundColor = "";
    holiday[index].style.color = "";
  }
}

function paintBackground() {
  const holiday = document.querySelectorAll(".holiday");
  for (let index = 0; index < holiday.length; index += 1) {
    holiday[index].style.backgroundColor = "green";
    holiday[index].style.color = "white";
  }
}

function checkBackground() {
  const holiday = document.querySelectorAll(".holiday");

  if (holiday[0].style.backgroundColor === "green") {
    cleanBackgroun();
  } else if (holiday[0].style.backgroundColor === "") {
    paintBackground();
  }
}

function holidaysBackground() {
  checkBackground();
}

function buttonHolidaysEvent() {
  const buttonHolidays = document.querySelector("#btn-holiday");
  buttonHolidays.addEventListener("click", holidaysBackground);
}

buttonHolidaysEvent();

// 4 - Crie botão dinamicamente com aa string sexta-feira

function createButtonFridays(string) {
  const stringFridays = string;
  const buttonsContainer = document.querySelector(".buttons-container");

  const buttonFridays = document.createElement("button");
  buttonFridays.innerHTML = stringFridays;
  buttonFridays.setAttribute("id", "btn-friday");

  buttonsContainer.appendChild(buttonFridays);
}

createButtonFridays("Sexta-feira");

// 5 - Implemente um evento que sinalize os dias de sexta ao apertar o botão e limpe caso aperte novamente

function cleanText() {
  const friday = document.querySelectorAll(".friday");
  for (let index = 0; index < friday.length; index += 1) {
    friday[index].style.fontWeight = "";
  }
}

function boldText() {
  const friday = document.querySelectorAll(".friday");
  for (let index = 0; index < friday.length; index += 1) {
    friday[index].style.fontWeight = "bold";
  }
}

function checkTextFridays() {
  const friday = document.querySelectorAll(".friday");

  if (friday[0].style.fontWeight === "bold") {
    cleanText();
  } else if (friday[0].style.fontWeight === "") {
    boldText();
  }
}

function fridaysText() {
  checkTextFridays();
}

function buttonFridaysEvent() {
  const buttonfridays = document.querySelector("#btn-friday");
  buttonfridays.addEventListener("click", fridaysText);
}

buttonFridaysEvent();

// 6 - Aumentar o texto do dia com mouse over e diminuir com mouse out

function zoonOut(day) {
  const currentDay = day.target;
  currentDay.style.fontSize = "";
}

function zoonIn(day) {
  const currentDay = day.target;
  currentDay.style.fontSize = "30px";
}

function daysZoomEvent() {
  const days = document.querySelectorAll(".day");

  for (let index = 0; index < days.length; index += 1) {
    days[index].addEventListener("mouseover", zoonIn);
    days[index].addEventListener("mouseout", zoonOut);
  }
}

daysZoomEvent();

// 7 - Função que cria tarefa a partir de uma string

function createTasks(string) {
  const text = string;
  const myTasks = document.querySelector(".my-tasks");
  const task = document.createElement("span");
  task.innerText = text;
  myTasks.appendChild(task);
}

createTasks("Estudar");

// 8 - Legenda com cor pra a tarefa

function colorLegend(cor) {
  const color = cor;
  const myTasks = document.querySelector(".my-tasks");
  const divTask = document.createElement("div");
  divTask.className = "task";
  divTask.style.backgroundColor = color;

  myTasks.appendChild(divTask);
}

colorLegend("blue");

// 9 - Implementar função que ao clicar na cor da tarefa defina classe selected

function cleanSelected() {
  const taskColor = document.querySelectorAll(".task");

  for (let index = 0; index < taskColor.length; index += 1) {
    taskColor[index].classList.remove("selected");
  }
}

function colorSelected(task) {
  const currentTask = task.target;

  if (currentTask.className.includes("selected")) {
    cleanSelected();
  } else {
    currentTask.classList.add("selected");
  }
}

function taskColorTracker() {
  const taskColor = document.querySelectorAll(".task");

  for (let index = 0; index < taskColor.length; index += 1) {
    taskColor[index].addEventListener("click", colorSelected);
  }
}

taskColorTracker();

// 10 - Altere o background do dia de acordo com a cor selected

function selectedColorPaint(day) {
  const currentDay = day.target;
  const selectedColor = document.querySelector(".selected");

  if (currentDay.style.backgroundColor === "") {
    if (selectedColor !== null) {
      const color = selectedColor.style.backgroundColor;
      currentDay.style.backgroundColor = color;
    }
  } else {
    currentDay.style.backgroundColor = "";
  }
}

function eventClickDays() {
  const days = document.querySelectorAll(".day");

  for (let index = 0; index < days.length; index += 1) {
    days[index].addEventListener("click", selectedColorPaint);
  }
}

eventClickDays();

// 11 - Adicionar task com click do botão ou com enter no input

function addCompromisso() {
  const input = document.getElementById("task-input");
  const compromissos = document.querySelector(".task-list");
  const task = document.createElement("li");

  if (input.value === "") {
    alert("Input Vazio");
  } else {
    task.innerText = input.value;
    compromissos.appendChild(task);
  }
  input.value = "";
}

function buttonAddEvent() {
  const button = document.getElementById("btn-add");
  button.addEventListener("click", addCompromisso);
}

function eventPressEnter(event) {
  if (event.keyCode === 13) {
    document.getElementById("btn-add").click();
  }
}

function inputAddEvent() {
  const input = document.getElementById("task-input");
  input.addEventListener("keyup", eventPressEnter);
}

buttonAddEvent();
inputAddEvent();
