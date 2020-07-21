// Array
var num = [5, 2, 0]
console.log(`Nosso vetor é ${num}`)
// Add um novo valor na chave 3
num[3] = 8
console.log(num)
// Add um novo valor no ultimo espaço disponivel
num.push(4)
console.log(num)
// Contar quantas chaves tem a array
console.log(num.length)
// Colocar os valores em orderm crescente
console.log(num.sort())

for (var i = 0; i < num.length; i++) {
    console.log(num[i])
}