let c1, c2, c3, c4, c5, c6, c7, c8, c9;
c1 = document.getElementById("C1");
c2= document.getElementById("C2");
c3 = document.getElementById("C3");
c4 = document.getElementById("C4");
c5 = document.getElementById("C5");
c6 = document.getElementById("C6");
c7 = document.getElementById("C7");
c8 = document.getElementById("C8");
c9 = document.getElementById("C9");

const possibilidadesVitoria = [
   ["c1", "c2", "c3"],
   ["c4", "c5", "c6"],
   ["c7", "c8", "c9"],
   ["c1", "c4", "c7"];
   ["c2", "c5", "c8"];
   ["c3", "c6", "c9"]; 
   ["c1", "c5", "c9"];
   ["c3", "c5", "c7"];
]

let playerX, playerO;
let qtd_jogadas = 0;
playerO = "images/playerO.png";
playerX ="images/playerO.png";
let jogador = playerX;

c1.addEventListener('click', () => {
  qtd_jogadas++;
  jogador = jogador === playerX ? playerO : playerX;
  c1.style.backgroundImage = `url(${jogador})`;
  vitoria()
})

c2.addEventListener('click', () => {
  qtd_jogadas++;
  jogador = jogador === playerX ? playerO : playerX;
  c2.style.backgroundImage = `url(${jogador})`;
  vitoria()
})

c3.addEventListener('click', () => {
  qtd_jogadas++;
  jogador = jogador === playerX ? playerO : playerX;
  c3.style.backgroundImage = `url(${jogador})`;
  vitoria()
})

c4.addEventListener('click', () =>{
  qtd_jogadas++;
  jogador = jogador === playerX ? playerO : playerX;
  c4.style.backgroundImage = `url(${jogador})`;
  vitoria()
})

c5.addEventListener('click', () => {
  qtd_jogadas++;
  jogador = jogador === playerX ? playerO : playerX;
  c5.style.backgroundImage = `url(${jogador})`;
  vitoria()
})

c6.addEventListener('click', () => {
  qtd_jogadas++;
  jogador = jogador === playerX ? playerO : playerX;
  c6.style.backgroundImage = `url(${jogador})`;
  vitoria()
})

c7.addEventListener('click', () => {
  qtd_jogadas++;
  jogador = jogador === playerX ? playerO : playerX;
  c7.style.backgroundImage = `url(${jogador})`;
  vitoria()
})

c8.addEventListener('click', () => {
  qtd_jogadas++;
  jogador = jogador === playerX ? playerO : playerX;
  c8.style.backgroundImage = `url(${jogador})`;
  vitoria()
})

c9.addEventListener('click', () => {
  qtd_jogadas++;
  jogador = jogador === playerX ? playerO : playerX;
  c9.style.backgroundImage = `url(${jogador})`;
  vitoria()
})

function vitoria() {chanches possi
    const [a, b, c] = combination; 
    if (cells[a] === currentPlayer && cells[b] === currentPlayer && cells[c] === currentPlayer) { 
      winner = currentPlayer; status.textContent = `O jogador ${winner} venceu!`; return; } }
  
  
  if(qtd_jogadas == 9){
    alert("O jogo deu empate!")
  }
}
