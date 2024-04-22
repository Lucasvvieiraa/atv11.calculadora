
function Calculadora () {
    const operação = document.documentElementById("operação").value;
    const n1 = parseflloat = parsefloat(document.getElementById("n1").value);
    const n2 = paresefloat(document.getElementById("n2").value);
    let results;

    switch (operation){
        case 'adicao':
            result = n1 + n2;
            break;
        case 'subtração':
                result = n1 - n2;
                break;
        case'multiplicacao':
                result = n1 * n2;
                break;
        case 'divisao':
            if(n2 !== 0) {
                result = n1 / n2;
            } else{
                result = 'Inválido, divisão por zero';
            }
            break;
            default:
                result = 'Operação inválida';
                break;
        
    }
    document.getElementById("result").value = result;
    
}