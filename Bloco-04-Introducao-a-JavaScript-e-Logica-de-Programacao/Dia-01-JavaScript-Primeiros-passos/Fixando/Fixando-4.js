const currentHour = 11;

let message;

if (currentHour >= 20) {
    message = "nao deveriamos comer nada, hora de dormir";
} else if (currentHour >= 18 && currentHour < 22) {
    message = "rango da noite";
} else if (currentHour >= 14 && currentHour < 18) {
    message = "fazer bolo pro cafe da tarde";
} else if (currentHour >= 11 && currentHour < 14) {
    message = "hora do almoco";
} else if (currentHour >= 4 && currentHour < 11) {
    message = "cheiro de cafe";
};

console.log(message);