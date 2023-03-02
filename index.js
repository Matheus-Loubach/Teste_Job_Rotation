// Função que calcula a sequência de Fibonacci até o número informado.
function fibonacci(num) {

    let seq = [0, 1];

    while (seq[seq.length - 1] <= num) {
        let nextNum = seq[seq.length - 1] + seq[seq.length - 2];
        seq.push(nextNum);
    }

    //Verifica se o número informado pertence à sequência
    if (seq.includes(num)) {
        console.log(`(Teste 2) ${num} pertence à sequência de Fibonacci`);
    } else {
        console.log(`(Teste 2) ${num} não pertence à sequência de Fibonacci`);
    }
}

fibonacci(34);//Valor a ser calculado



let palavra = "Job Rotation"; // string a ser invertida
let palavraInvertida = "";

for (let i = palavra.length - 1; i >= 0; i--) {

    palavraInvertida += palavra[i];
}

console.log(`(Teste 5) ${palavraInvertida}`); // exibe a string invertida no console

