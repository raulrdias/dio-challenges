const partidasRanked = (vit, der) => {
    return vit - der;
}

const calculadoraRanked = () => {
    const total = partidasRanked(120, 10);
    let rank = 'Imortal';

    for (const points in ranked) {
        if (total <= points) {
            rank = ranked[points];
            break;
        }
    }
    console.log(`O Herói com saldo de ${total} está no nível de ${rank}`);
}

const ranked = {
    10: 'Ferro',
    20: 'Bronze',
    50: 'Prata',
    80: 'Ouro',
    90: 'Platina',
    100: 'Ascendente',
};

calculadoraRanked();
