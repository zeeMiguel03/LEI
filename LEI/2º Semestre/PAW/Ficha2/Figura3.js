function soma(a, b) {
    return a + b;
}

console.log(soma(1, 2));  // Saída: 3
/**
 * Quando o parâmetro b não é passado, o JavaScript define b como undefined. Então, a operação que acontece é: 1 + undefined. 
 * O operador de soma (+) em JavaScript tenta converter ambos os valores para números para realizar a soma,
 * mas undefined não pode ser convertido para um número válido. A conversão de undefined para número resulta em NaN.
 */
console.log(soma(1));     // Saída: NaN
console.log(soma());      // Saída: NaN

function concat(a, b) {
    return a + b;
}

console.log(concat("Hello ", "World"));  // Saída: "Hello World"
console.log(concat(""));                // Saída: "undefined"
console.log(concat());                  // Saída: "NaN"

function odd_demo2(a, b) {
    if (b == undefined) {
        console.log(a);
    } else {
        console.log(a + " " + b);
    }
}

odd_demo2(1);               // Saída: 1
odd_demo2("hello", 3);      // Saída: hello 3
odd_demo2();                // Saída: undefined

function element(index) {
    var arr = [1, 2, 3];
    return arr[index];
}

console.log(element(-1));  // Saída: undefined

function sample(c) {
    console.log(unknow);
}

sample();  // Erro: ReferenceError: unknow is not defined, Aqui você está a tentar aceder a uma variável chamada unknow, 
// mas essa variável não está definida em nenhum lugar no código. Isso causa um erro de referência.
