
const fs = require('fs');
fs.mkdir('C:\Src\\', (error) => {//crear un directorio de forma asíncrona.
    if (!error) {
        console.log("La carpeta se ha creado creado")
    }
})

const month = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const year = ['2017', '2018', '2019', '2020', '2021', '2022']
const texto = ['1', '2', '3', '4', '5', '6']

//la funcion mkdir crea
for (var i = 0; i < year.length; i++) {
    console.log('C:\Src\\' + year[i])
    fs.mkdir('C:\Src\\' + year[i], (error) => {
    })

    for (var x = 0; x < month.length; x++) {
        console.log('C:\Src\\' + month[x])
        fs.mkdir('C:\Src\\' + year[i] + '\\' + month[x], (error) => {
        })

        
        for (var y = 0; y < texto.length; y++) {
            console.log('C:\Src\\' + texto[y])
            fs.mkdir('C:\Src\\' + month[y] + '\\' + texto[y], (error) => {


            })
        }
        }

    }

/*
const fs= require('fs');

if(fs.existsSync("2018")){//se utiliza para comprobar de forma síncrona si un archivo ya existe en la ruta dada o no
console.log("La carpeta se ha creado creado")
}else{
 
fs.mkdir("2018", (error)=>{
   if(error){
       console.log(error.message);
   }
   console.log("Directorio creado")
});
}*/

