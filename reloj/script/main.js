/*
Muestra un reloj en pantalla con fecha y hora y que se actualice cada segundo. Usar la función setTimeout().
*/
const container = document.querySelector('#clock-container');

const printDate = (arrayDate) => {
    const clock = document.createElement('p');
    while(true){
        container.innerHTML='';
        clock.innerHTML=`Date: ${arrayDate[2]}/${arrayDate[1]}/${arrayDate[0]} Time: ${arrayDate[3]}:${arrayDate[4]}:${arrayDate[5]}`;
        let actualDate = setTimeOut(arrayDate,1000);
        
    }

}

const date = () => {
    let date = new Date ();
    let anio = date.getFullYear();
    let mes = date.getMonth()
    let day = date.getDay();
    let hora = date.getHours();
    let mins = date.getMinutes()
    let sec = date.getSeconds();
    let arrayDate = [anio,mes,day,hora,mins,sec];
    console.log(arrayDate);
    return arrayDate;
}

printDate(date());