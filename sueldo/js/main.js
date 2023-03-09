/*
Con el operador condicional, pedir al usuario que ingrese su sueldo
bruto y si supera los 20000€, se le debe aplicar un descuento del 20%.
Si no supera los 20000€, el descuento será del 10%. 
*/
let sueldo = prompt('introduce tu sueldo bruto');
let sueldoNeto;

const imprimirSueldo = () => {
    if (validarSueldo(sueldo)) {
        let numSueldo = parseFloat(sueldo);
        calcularSueldoNeto(numSueldo);
    } else {
        document.write('eso no era un numero, introduce otro');
    }
}

const validarSueldo = (sueldoIntroducido) => {

    console.log(typeof sueldoIntroducido);
    return regexp.test(sueldo);
}

const calcularSueldoNeto = (sueldoBruto) => {
    if (sueldoBruto >= 20000) {
        sueldoNeto = sueldo * 0.8;
        document.write(`tu sueldo neto es de ${sueldoNeto}€, tu sueldo bruto es de ${sueldoBruto}`);
        console.log(sueldoNeto);
    } else if (sueldoBruto < 20000) {
        sueldoNeto = sueldo * 0.9;
        document.write(`tu sueldo neto es de ${sueldoNeto}€, tu sueldo bruto es de ${sueldoBruto}`);
        console.log(sueldoNeto);
    }
}

