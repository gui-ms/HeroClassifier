const prompt = require('prompt-sync')()

let nome = prompt("Qual o seu nome?");
let experiencia = Number(prompt("Quantos pontos de experiência você possui?"));
let nivel;

if (experiencia <= 1000) {
    nivel = 'Ferro';
}
else if (experiencia <= 2000){
    nivel = "Bronze";
}
else if (experiencia <= 5000){
    nivel = "Prata";
}
else if (experiencia <= 7000){
    nivel = "Ouro";
}
else if (experiencia <= 8000){
    nivel = "Platina";
}
else if (experiencia <= 9000){
    nivel = "Ascendente";
}
else if (experiencia <= 10000){
    nivel = "Imortal";
}
else{
    nivel = "Radiante";
}


console.log(`O Herói de nome ${nome} está no nível ${nivel}`);