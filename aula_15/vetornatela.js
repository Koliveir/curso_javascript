let valores = [8,5,1,17,9,2,0,4]

for (let i = 0; i < valores.length; i++) {
    console.log(`A posição ${i} tem o valor ${valores[i]}`)
}

for (let i in valores) {
    console.log(valores[i])
}

console.log(valores.indexOf(17))