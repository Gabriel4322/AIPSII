let ht, vh, pd, sb, td, sl

vh = Number(prompt("valo por hora de trabalhada por juca:R$ "))

ht = Number(prompt("Horas de trabalhada no mês por juca: "))

pd = Number(prompt("prescentual de desconto do juca: "))

sb  = ht*vh
td = (pd/100)*sb
sl = sb-td

alert("Valo do Salario bruto R$: " + sb.toFixed(2))
alert("total de desconto R$: " + td.toExponential(2))
alert("Valo do Salario liquido R$: " + sl.toFixed(2))
alert("hora de trabalhada: " + ht + ":00")