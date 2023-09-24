# Calculadora de Partidas Ranqueadas

<p align="center">
  <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXA5ZHVwZ2J2d2pxODZhdXhiYmN4MG4wMzdva2U2dmt6d2hsMWp5ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/l2Sq8V0P7o1Ly0cX6/giphy.gif" alt="Vitória" width="200" height="200">
  <img src="https://media.giphy.com/media/l2Sq6NfZQWh9r9a5q/giphy.gif" alt="Derrota" width="200" height="200">
</p>


Este repositório contém uma solução para o desafio "Calculadora de Partidas Ranqueadas". O objetivo deste desafio é criar uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador, calcula o saldo de partidas ranqueadas (vitórias - derrotas) e determina o nível do jogador com base nas regras especificadas. A seguir, estão as instruções sobre como resolver o desafio:

## Instruções para Entrega

### Pré-requisitos
Certifique-se de que você possui as seguintes habilidades em programação:

- Uso de variáveis
- Uso de operadores
- Uso de laços de repetição
- Uso de estruturas de decisão
- Definição e uso de funções

### Passos para Resolver o Desafio

1. Crie uma função chamada `calculadoraRanked` que recebe dois parâmetros: `vit` (quantidade de vitórias) e `der` (quantidade de derrotas).

2. Dentro da função `calculadoraRanked`, calcule o saldo de partidas ranqueadas subtraindo a quantidade de derrotas da quantidade de vitórias.

3. Utilize uma estrutura de decisão para determinar o nível do jogador com base nas seguintes regras:
   - Se a quantidade de vitórias for menor do que 10, o jogador é classificado como "Ferro".
   - Se a quantidade de vitórias estiver entre 11 e 20, o jogador é classificado como "Bronze".
   - E assim por diante, até "Imortal" para 101 ou mais vitórias.

4. Exiba uma mensagem que informa o saldo de partidas ranqueadas (`saldoVitorias`) e o nível do jogador (`nivel`) com base na classificação da quantidade de vitórias.

### Saída

Ao final da execução da função `calculadoraRanked`, será exibida a seguinte mensagem:
"O Herói tem saldo de **{saldoVitorias}** está no nível de **{nivel}**"

## Como Usar a Função

Para usar a função `calculadoraRanked`, siga estas etapas:

1. Chame a função `calculadoraRanked` e forneça os valores das variáveis `vit` (quantidade de vitórias) e `der` (quantidade de derrotas) como argumentos.

2. A função calculará o saldo de partidas ranqueadas e determinará o nível do jogador com base nas regras especificadas.

3. A mensagem final será exibida, informando o saldo de partidas ranqueadas e o nível do jogador.


