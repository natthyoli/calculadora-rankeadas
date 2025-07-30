function calcularNivel(vitorias, derrotas) {
  const saldo = vitorias - derrotas;
  let nivel;

  switch (true) {
    case (vitorias < 10):
      nivel = 'Ferro';
      break;
    case (vitorias >= 10 && vitorias <= 20):
      nivel = 'Bronze';
      break;
    case (vitorias >= 21 && vitorias <= 50):
      nivel = 'Prata';
      break;
    case (vitorias >= 51 && vitorias <= 80):
      nivel = 'Ouro';
      break;
    case (vitorias >= 81 && vitorias <= 90):
      nivel = 'Diamante';
      break;
    case (vitorias >= 91 && vitorias <= 100):
      nivel = 'Lendário';
      break;
    case (vitorias >= 101):
      nivel = 'Imortal';
      break;
    default:
      nivel = 'Nível desconhecido';
  }

  return { saldo, nivel };
}

// Testando com alguns exemplos
const partidas = [
  { vitorias: 3, derrotas: 5 },
  { vitorias: 12, derrotas: 4 },
  { vitorias: 30, derrotas: 10 },
  { vitorias: 55, derrotas: 20 },
  { vitorias: 88, derrotas: 5 },
  { vitorias: 95, derrotas: 10 },
  { vitorias: 105, derrotas: 8 },
];

for (let partida of partidas) {
  const resultado = calcularNivel(partida.vitorias, partida.derrotas);
  console.log(`O Herói tem de saldo de ${resultado.saldo} e está no nível de ${resultado.nivel}`);
}
