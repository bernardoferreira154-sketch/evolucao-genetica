const objetivo = "HELLO";

const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZÇ"


//criando a gurizada né, pai
function AdaoEEva () {
let pessoa = "";

    for (let i = 0; i < objetivo.length; i++){
        let indice = Math.floor(Math.random() * letras.length)
        pessoa += letras[indice];
    }

    return pessoa

}
//teste
console.log(AdaoEEva())


//calcular acertos
function calcularFitness (pessoa) {
let acertos = 0

    for (let i = 0; i < pessoa.length; i++){
        if (pessoa[i] == objetivo[i]){
            acertos += 1;
        }

    }

    return acertos;

}

//teste
console.log(calcularFitness("HELIP"))


//criando o conjunto da rapaziada. vulgo: população
function criarPopulacao(tamanho){
const populacao = [];

    for(let i = 0; i < tamanho; i++){
        populacao.push(AdaoEEva());
    }

    return populacao;

}

//teste
console.log(criarPopulacao(100));


//avliando os gurizao
function avaliandoPopulacao(populacao){

    let avaliados = [];
    for (let i = 0; i < populacao.length; i++){
        let individuo = populacao[i];
        let fitness = calcularFitness(individuo);
        avaliados.push({
            individuo: individuo,
            fitness: fitness
        });
    }

    return avaliados

}



//ordenar a galera, né, meu. ta achando q é bagunça?
function ordenarPopulacao(populacao){

    populacao.sort((a, b) => b.fitness - a.fitness)

    return populacao;
}




//selecionando os goat
function selecionandoMelhores(populacao, quantidade){

    return populacao.slice(0, quantidade);
}





//coito :/
function coito(pai1, pai2){
let filho = "";

for (let i = 0; i < objetivo.length; i++){
if (Math.random() < 0.5){
    filho += pai1[i]
}else{
    filho += pai2[i]
}

}

return filho

}


//TESTE
//console.log(coito("HEPPE", "OLLLO"));

//transformando os caba em Xman (mutação)
function mutar(individuo, taxa){
    let resultado = "";

    for (let i = 0; i < individuo.length; i++)
        if (Math.random() < taxa){
            let indice = Math.floor(Math.random() * letras.length);

            resultado += letras[indice]
        }else{
            resultado += individuo[i]
        }

        return resultado
}
//teste
console.log(mutar("HELLO", 0.25));

//variaveis, valores, etc
const tamanhoPopulacao = 100;
const quantidadePais = 10;
const taxaDeMutacao = 0.5;

let populacao = criarPopulacao(tamanhoPopulacao);

while (true) {

    let avaliados = avaliandoPopulacao(populacao);
    ordenarPopulacao(avaliados)

        if (avaliados[0].fitness == objetivo.length){
            console.log("ACHEI, SEU BABÃO. a palavra era", avaliados[0].individuo);
            break;
        }

        let pais = selecionandoMelhores(avaliados, quantidadePais);
        let novaPopulacao = []

        while (novaPopulacao.length < tamanhoPopulacao){
            let escolhePai1 = Math.floor(Math.random() * pais.length);
            let pai1 = pais[escolhePai1];
            let escolhePai2 = Math.floor(Math.random() * pais.length);
            let pai2 = pais[escolhePai2]
            let filho = coito(pai1.individuo, pai2.individuo)
            filho = mutar(filho, taxaDeMutacao);
            novaPopulacao.push(filho);
        }
        
        populacao = novaPopulacao;

    
}