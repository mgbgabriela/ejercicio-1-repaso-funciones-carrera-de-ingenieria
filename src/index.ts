/*Ejercicio 1:  
Una materia de la carrera de Ingeniería de Sistemas exige la entrega de un trabajo práctico 
cada mes del año académico. Este arreglo contiene las notas de un alumno para los meses 
de marzo a diciembre:  
notasAlumno: [7, 6, 9, 5, 8, 7, 10, 4, 8, 8]  
1) Teniendo en cuenta que se aprueba con 6, crear una función que devuelva en que 
meses desaprobó el alumno.  
2) Crear una función que devuelva en que mes obtuvo menor nota el alumno y cuál fue 
la nota.  
3) Crear una función que devuelva en que mes obtuvo mayor nota el alumno y cuál fue 
la nota.  
4) Crear una función que devuelva el promedio del alumno.*/

let notas : number []= new Array ();
notas = [7,6,9,5,8,7,10,4,8,8];
let meses : string []= new Array();
meses = ["marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
let indice: number = 0;

     let mostrarMesesDesaprobados = (notas: number[], meses: string[]) => {
         let mesesDesaprobados: string= "";
         for (indice = 0; indice < 10; indice ++){ 
        if (notas[indice] <= 6)
            mesesDesaprobados+= meses [indice] + " ,"
         } 
         return mesesDesaprobados; 
        
        }

        console.log ("Usted ha desaprobado en " + mostrarMesesDesaprobados(notas,meses));


     let mostrarMenorNota = (notas : number[], meses: string[]) =>{
  
             let menorNota: number = 11;
             for (indice = 0; indice<10; indice ++){
              if (notas[indice]< menorNota){
        
              menorNota = notas[indice];
            }
        
            }return menorNota;
          }

            console.log ("Su menor nota ha sido "+ mostrarMenorNota(notas, meses))    
   
     let mostrarMayorNota = (notas : number[], meses: string[]) =>{
  
               let mayorNota: number = 0;
                for (indice = 0; indice<10; indice ++){
                 if (notas[indice]> mayorNota){
          
                  mayorNota = notas[indice];
               }
          
               }return mayorNota;
            }
  
            console.log ("Su mayor nota ha sido " + mostrarMayorNota(notas, meses));

        
        let generarPromedio= (notas: number[]) => {
            let total : number = 0;
            let promedio: number = 0;
          for(indice = 0; indice<10; indice ++){
           total += notas[indice];
           promedio= total/10;
          
        } return promedio;
      }
console.log ("Usted ha obtenido un promedio de " + generarPromedio (notas))
     
     















        

    