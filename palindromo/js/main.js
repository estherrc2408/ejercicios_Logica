/*
Pedirle al usuario una frase y decirle si es palíndromo o no. 
Un palíndromo es una palabra o expresión que es igual si se lee
de izquierda a derecha que de derecha a izquierda.
Ejemplos de palíndromos para probar: "La ruta nos aporto otro
paso natural", “reconocer”, "Atar a la rata", “Dábale arroz a la
zorra el abad”, “Somos o no somos”, “A ti no, bonita”, “Allí ves a
Sevilla”, “Amad a la dama”, “Amar da drama”, “Arriba la birra”.
*/
let strings = ["La ruta nos aporto otro paso natural", 'reconocer', "Atar a la rata", 'Dábale arroz a la zorra el abad', 'Somos o no somos', 'A ti no, bonita', 'Allí ves a Sevilla', 'Amad a la dama', 'Amar da drama', 'Arriba la birra']

const reconocerPalindromo = (string) =>{
    let stringSIN = string.replace(/\s+/g,'');
    let stringSINSIN = stringSIN.replace(/,+/g,'');
    let stringMIN =stringSINSIN.toLowerCase();
    console.log(stringMIN);
    let long = stringMIN.length;
    let ini;
    let fin;
    for(let i=0; i<long; i++){
        ini = stringMIN.charAt(i);
        fin = stringMIN.charAt(long-(i+1));
        console.log(ini+'y'+fin);
        if(ini!== fin){
            console.log(ini+' y '+fin+' no cumple, no es un palindromo');
            break;
        }else{
            console.log('cumple');
        }
    }
}

reconocerPalindromo(strings[6]);