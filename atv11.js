
function Calculadora () {
    const operação = document.documentElementById("operação").value;
    const n1 = parseflloat = parsefloat(document.getElementById("n1").value);
    const n2 = paresefloat(document.getElementById("n2").value);
    var result = document.querySelector('span');
    let results;

    switch (operation){
        case 'adicao':
            result.innerhtml = n1 + n2;
            break;
        case 'subtração':
                result.innerhtml = n1 - n2;
                break;
        case'multiplicacao':
                result.innerhtml = n1 * n2;
                break;
        case 'divisao':
            if(n2 !== 0) {
                result.innerhtml = n1 / n2;
            } else{
                result.innerhtml = 'Inválido, divisão por zero';
            }
            break;
            default:
                result.innerhtml = 'Operação inválida';
                break;
        
    }
    
}