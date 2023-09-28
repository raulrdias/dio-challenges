# Classificador de Tipo de Herói

Este repositório contém uma solução para o desafio "Classificador de Tipo de Herói". O objetivo deste desafio é criar uma classe genérica que representa um herói de uma aventura e que possui propriedades como nome, idade e tipo (ex: guerreiro, mago, monge, ninja). Além disso, a classe deve ter um método chamado "atacar" que exibe uma mensagem com base no tipo de herói e no tipo de ataque. A seguir, estão as instruções sobre como resolver o desafio:

# With Your Destiny

<div style="text-align:center;">
  <img src="https://steamuserimages-a.akamaihd.net/ugc/1829036090974146606/2EBBAE58AE8BD628C4EC0A2DF7FB645E0AB74189/" alt="Nome Alternativo" width="300" height="200">
</div>

## Descrição do Projeto

### Classes do Jogo

Neste projeto, foram criadas duas classes principais para representar personagens jogáveis no contexto do jogo "With your Destiny (WYD)". O jogo possui quatro classes de personagens, cada uma com quatro evoluções possíveis.

#### Classe `ClasseEvolucao`

A classe `ClasseEvolucao` é responsável por definir as classes de personagens do jogo e suas evoluções. Ela possui os seguintes atributos:

- `nome`: O nome da classe de personagem.
- `evolucoes`: Um array que armazena as evoluções disponíveis para essa classe.

#### Classe `MmoRpg`

A classe `MmoRpg` representa os personagens jogáveis no jogo. Ela é instanciada com os seguintes atributos:

- `nome`: O nome do personagem.
- `classe`: A classe do personagem, escolhida a partir das opções disponíveis.
- `evolucao`: A evolução do personagem dentro da sua classe.
- `ataque`: O tipo de ataque do personagem (por exemplo, "Mágico" ou "Físico").
- `vida`: A quantidade de pontos de vida do personagem, que começa com um valor padrão de 50.

A classe `MmoRpg` também possui os seguintes métodos:

- `personagem()`: Retorna o nome do personagem.
- `atacar(alvo)`: Realiza um ataque no personagem alvo, reduzindo sua vida em 10 pontos e exibindo uma mensagem com informações sobre o ataque.

### Exemplo de Uso

Neste exemplo de uso, são criados dois personagens (`personagem1` e `personagem2`) com diferentes classes e evoluções, e um ataque é realizado entre eles. A função `exibirPersonagens` exibe os nomes dos personagens envolvidos no combate.
