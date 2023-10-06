// Defina o nome e a quantidade de XP do herói
var nome_heroi = "RobPool";
var xp_heroi = 8755;

// Inicialize a variável para o nível
var nivel = "";

// Utilize a estrutura de decisão para determinar o nível
if (xp_heroi < 1000) {
    nivel = "Ferro";
} else if (xp_heroi >= 1001 && xp_heroi <= 2000) {
    nivel = "Bronze";
} else if (xp_heroi >= 2001 && xp_heroi <= 5000) {
    nivel = "Prata";
} else if (xp_heroi >= 5001 && xp_heroi <= 7000) {
    nivel = "Ouro";
} else if (xp_heroi >= 7001 && xp_heroi <= 8000) {
    nivel = "Platina";
} else if (xp_heroi >= 8001 && xp_heroi <= 9000) {
    nivel = "Ascendente";
} else if (xp_heroi >= 9001 && xp_heroi <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// Exibir a mensagem
console.log(`O Herói de nome ${nome_heroi} está no nível de ${nivel}`);
console.log("Felipão, Obrigado pelo conhecimento transmitido")