const validation = new JustValidate("#form");

var today = new Date();
var date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

console.log(date);

validation
  .addField("#name", [
    {
      rule: "minLength",
      value: 10,
      errorMessage: "Tamanho mínimo de 10 caracteres",
    },
    {
      rule: "maxLength",
      value: 40,
    },
    {
      rule: "required",
      errorMessage: "Nome é obrigatório",
    },
  ])
  .addField("#email", [
    {
      rule: "required",
      errorMessage: "Email é obrigatório",
    },
    {
      rule: "email",
      errorMessage: "Email inválido!",
    },
  ])
  .addField("#termos", [
    {
      rule: "required",
      errorMessage: "É obrigatório aceitar os termos",
    },
  ])
  .onSuccess((event) => {
    console.log("Validation passes and form submitted", event);
  });
