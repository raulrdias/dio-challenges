//Usando como base o game With your Destiny (WYD)

class ClasseEvolucao {
    constructor(nome, evolucoes) {
        this.nome = nome;
        this.evolucoes = evolucoes;
    }
}

const classesEvolucoes = [
    new ClasseEvolucao("Beast Master", ["Mortal", "Arch", "Celestial", "Sub Celestial"]),
    new ClasseEvolucao("Foema", ["Mortal", "Arch", "Celestial", "Sub Celestial"]),
    new ClasseEvolucao("Huntress", ["Mortal", "Arch", "Celestial", "Sub Celestial"]),
    new ClasseEvolucao("Trans Knight", ["Mortal", "Arch", "Celestial", "Sub Celestial"]),
];

class MmoRpg {
    constructor(nome, classeIndex, evolucaoIndex, ataque) {
        this.nome = nome;
        this.classe = classesEvolucoes[classeIndex].nome;
        this.evolucao = classesEvolucoes[classeIndex].evolucoes[evolucaoIndex];
        this.ataque = ataque;
        this.vida = 50;
    }

    personagem() {
        return `${this.nome}`;
    }

    atacar(alvo) {
        this.vida -= 10;
        console.log(`${this.nome} atacou ${alvo.nome} com Atak ${this.ataque}. Vida de ${alvo.nome}: ${this.vida}`);
    }
}

const personagem1 = new MmoRpg("Caramel Dog", 1, 0, "Magico");
const personagem2 = new MmoRpg("Brazil", 2, 2, "Fisico");

function exibirPersonagens(personagem1, personagem2) {
    console.log(personagem1.personagem() + " x " + personagem2.personagem());
}

console.log("------------------");
exibirPersonagens(personagem1, personagem2);
console.log("------------------");

// Ataque
personagem1.atacar(personagem2);
