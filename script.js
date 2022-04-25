function fizzBuzz2() {
    let mostrar = document.getElementById("mostrar").value;
    var FizzBuzz = 0;
    var FizzBuzzFinal = 100;

     while (FizzBuzzFinal>FizzBuzz) {
        FizzBuzz ++;
       /// Multiplos de 3
     if(( FizzBuzz % 3 ) == 0){
        
        document.write(FizzBuzz.toString()+ ",")
    
     }
       }
    
     
    return mostrar;
    
}
// Multiplos de 5
function fizzBuzz3() {
    let mostrar = document.getElementById("mostrar").value;
    var FizzBuzz = 0;
    var FizzBuzzFinal = 100;

     while (FizzBuzzFinal>FizzBuzz) {
        FizzBuzz ++;
       /// Multiplos de 3
     if(( FizzBuzz % 5 ) == 0){
        
        document.write(FizzBuzz.toString()+ ",")
    
     }
       }
    
     
    return mostrar;
    
}


// Hasta que numero llegara FizzBuzz de acuerdo a lo que ingrese el usuario
function fizzBuzz4(params) {
    let seleccion = document.getElementById("seleccion").value;
     var FizzFinal = prompt("Ingresa el valor de NewFizzBuzz, debe ser entre 1 y 100");
     var FizzInicial = 0;
     while (FizzFinal>FizzInicial) {
        FizzInicial ++;
        document.write(FizzInicial+ " ","")
    }
    
     
    return seleccion;
    
}
// Ingreso de multiplos a eleccion por el usuario
function fizzBuzz5(params) {
    let seleccion = document.getElementById("nuevoargumento").value;
     var fizz_num  = prompt("Ingresa un multiplo cualquiera entre 1 y 100");
     var buzz_num = prompt("Ingresa un multiplo cualquiera entre 1 y 100");
    var FizzBuzz = 0;
    var FizzBuzzFinal = 100;
     while (FizzBuzz < FizzBuzzFinal) {
        FizzBuzz ++;
       
   if(( FizzBuzz % fizz_num ) == 0 && ( FizzBuzz % buzz_num ) == 0 ){
        
            document.write(FizzBuzz+ " ","")
           
            }
    
        }
        return seleccion;
    }

