
function Calculadora () {
    const operacao = document.documentElementById("operation");
    const casos = operacao.selectedIndex;
    const n1 = parsefloat(document.getElementById("n1").value);
    const n2 = parsefloat(document.getElementById("n2").value);
    var result = document.querySelector('span');

    console.log(n1)
    console.log(n2)
    console.log(casos)

    switch (casos){
        case 1:
            result.innerHtml = n1 + n2;
            break;
        case 2:
                result.innerHtml = n1 - n2;
                break;
        case 3:
                result.innerHtml = n1 * n2;
                break;
        case 4:
            if(n2 !== 0) {
                result.innerHtml = n1 / n2;
            } else{
                result.innerHtml = 'Inválido, divisão por zero';
            }
            break;
            default:
                result.innerHtml = 'Operação inválida';
                break;
        
    }
    
}