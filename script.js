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


let populacao = criarPopulacao(100);

let avaliados = avaliandoPopulacao(populacao);
//teste
console.log(ordenarPopulacao(avaliados))

//selecionando os goat
function selecionandoMelhores(populacao, quantidade){

    return populacao.slice(0, quantidade);
}

let pais = selecionandoMelhores(avaliados, 10)

console.log(pais)
