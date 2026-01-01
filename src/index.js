// Dynamic years of experience
let birthYear = 1959;
let age = new Date().getFullYear() - birthYear;
document.querySelector("#experience").textContent = age;
