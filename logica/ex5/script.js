// let n1, antecessor

// n1 = Number(prompt("digite um numero: "))

// antecessor = n1-1

// alert("antecerssor do numero que você digitou é: " + antecessor)

// let dia, mês, ano, idade

// idade = Number(prompt("qual sua idade: "))

// mês = Number(prompt("quantos meses: "))

// ano = Number(prompt("quantos anos: "))

// dias = idade + (mês*30) + (ano*365)

// alert("Quantos dias  da sua vida ja passou: " + dias)

// let  numero_votosBranco, nulos, validos, eleitores, perstualNulos, perstualValidos, perstualBrancos

// validos = Number(prompt("quantos votos validos: "))
// nulos = Number(prompt("quantos votos nulos: "))
// numero_votosBranco = Number(prompt("quantos votos em branco: "))

// eleitores = numero_votosBranco+nulos+validos


// perstualNulos = (nulos/eleitores)*100
// perstualValidos = (validos/eleitores)*100
// perstualBrancos = (numero_votosBranco/eleitores)*100

// alert("total: " + perstualNulos + " " + "total: " + perstualBrancos + " " + "total: " + perstualValidos)

let salario, almento, salario_novo

salario = Number(prompt("seu salario: "))
almento = Number(prompt("seu almento: "))

salario_novo = salario * (almento/100)

alert("salario novo: " + salario_novo.toFixed(2))

