const name = 'Caramel Dog';
const exp = 9500;

const rankMap = {
    1000: 'Ferro',
    2000: 'Bronze',
    5000: 'Prata',
    7000: 'Ouro',
    8000: 'Platina',
    9000: 'Ascendente',
    10000: 'Imortal'
};

let rank = 'Radiante';

for (const expThreshold in rankMap) {
    if (exp <= expThreshold) {
        rank = rankMap[expThreshold];
        break;
    }
}

console.log(`O Herói de nome ${name} está no nível de ${rank}`);
