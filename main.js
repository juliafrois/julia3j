const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".aba-conteudo")
const tempo = document.querySelectorAll(".contador")
tempo[0].textContent = "ola"
const tempoObjetivo1 = new Date(2024,4,16,19);
const tempoObjetivo2 = new Date(05);
const tempoObjetivo3 = new Date(2007);
const tempoObjetivo4 = new Date(17);
const tempoObjetivo5 = new Date(06);
const agora = new Date();
tempo[1].textContent = tempoObjetivo1
console.log(botoes);
for(let i = 0; i < botoes.length ; i++){
    botoes[i].onclick = function() {
        for (j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            conteudo[j].classList.remove("ativo")
        }
        botoes[i].classList.add("ativo")
        conteudo[i].classList.add("ativo")
    }
}
