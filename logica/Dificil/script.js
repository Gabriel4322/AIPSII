// let idade


// idade = Number(prompt("Digite sua idade: "))

// if(idade >= 18){
//     alert("Você pode entra")
// }else{
//     alert("Tente novamente algum ano")
//     alert("Cresce, criança")
//     alert("olha, ali tem um caminho de docinhos indo pra lar")
// }

// let senha

// senha = Number(prompt("Digite a senha: "))

// if(senha == 1234){
// alert("acesso permitido")
// }else{
// alert("acesso negativo")
// }

// let A, B

// A = Number(prompt("Digite o numero: "))
// B = Number(prompt("Digite segundo numero: "))

// if(A > B){
// alert("O numero maior é A")
// }else{
// alert("O numero maior é B")
// }

// let placa

// placa = Number(prompt("Digite o numero da placa: "))

// if(placa == 0 || placa== 1){){
//     alert("segunda")

// }
// if(placa == 2 || placa == 3){
//     alert("terça")

// }
// if(placa == 4 || placa == 5){
//     alert("quarta")
// }
// if(placa == 6 || placa == 7){
//     alert("quinta")
// }
// if(placa == 8 || placa == 9){
//     alert("sexta")
// }

// let Palestra

// Palestra = Number(prompt("Digite o numero da Palestra: "))

// if(Palestra == 1){
//     alert("Animação com Scratch, laboratorio 305, 19horas")
// }
// if(Palestra == 2){
//     alert("Scratch para gamers, laboratorio 512, 20horas")
// }
// if(Palestra == 3){
//     alert("JavaScratch para leigos, laboratorio 101, 19horas")
// }
// if(Palestra == 4){
//     alert("Topicos avaçados de JavaScratch , laboratorio 305, 20horas")
// }
// if(Palestra == 5){
//     alert("Vida e carreira , auditório, 21horas")
// }

// let nota1, nota2, nota3, media

// nota1  = Number(prompt("Digite primeira nota: "))
// nota2  = Number(prompt("Digite segunda nota: "))
// nota3  = Number(prompt("Digite terçera nota: "))

// media = nota1 + nota2+ nota3/ 3

// if(media >= 7){
//     alert("passou de ano")
// }else{
//     alert("reprovou de ano" )
// }

// let pontuação

// pontuação = Number(prompt("Digite a sua potuação: "))

// if(pontuação <= 10){
//     alert("Deu ruim")
// }

// if(pontuação >10 && pontuação <= 100){
//     alert("Tá da para melhora")
// }

// if(pontuação > 100 && pontuação <= 200){
//     alert("Supinpa!")
// }

// if(pontuação > 200){
//     alert("MITOU!")
// }

let diario, preço, gasto, disconto, valorFinal

diario = Number(prompt("Digite quatos dias: "))

if(diario <=5){
    preço = 100
}

if(diario >= 6 && diario <= 10){
    preço = 90
}

if(diario >= 11){
   preço = 80
 }

 gasto = preço*diario
 disconto = gasto*25/100
 valorFinal = gasto - disconto + 150
 alert("quanto ele gatou R$" + gasto.toFixed(2))
 alert("resultado do valor total deu R$: " + valorFinal.toFixed(2))




