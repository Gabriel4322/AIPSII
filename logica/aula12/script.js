function soma(n1, n2){
    n1 = parseInt(document.getElementById("valor1").value)
    n2 = parseInt(document.getElementById("valor2").value)
    let result = n1 + n2
    alert(result)
}
function subt(n1, n2){
    n1 = parseInt(document.getElementById("valor1").value)
    n2 = parseInt(document.getElementById("valor2").value)
    let result = n1 - n2
    alert(result)
}
function mult(n1, n2){
    n1 = parseInt(document.getElementById("valor1").value)
    n2 = parseInt(document.getElementById("valor2").value)
    let result = n1 * n2
    alert(result)
}
function divisao(n1, n2){
    n1 = parseInt(document.getElementById("valor1").value)
    n2 = parseInt(document.getElementById("valor2").value)
    let result = n1 / n2
    if(n2 == 0){
    alert("O divisor não pode ser igual a Zero!")
}else{
    alert(result)
}
}
