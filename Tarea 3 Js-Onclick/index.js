
function mostrar() {
    let mensaje=document.getElementById('input').value;
    alert(mensaje);
  
    }



window.addEventListener('DOMContentLoaded',function(e){
    var content_container=document.getElementsByClassName("content-container")[0];

for(let index=0; index<10;index++){
    document.body.innerHTML=document.body.innerHTML +'<div class="content-container">' + content_container.innerHTML+'</div>';

}});


    




/* 
for (let index = 0; index < 10; index++) {
    console.log("Hola" + index);
    document.querySelector('div.button')
}

window.addEventListener('DOMContentLoaded',function(e){
     var person= new person('SEBAS');
person.printName();
 window.addEventListener('DOMContentLoaded',function(e){
    var input= document.getElementById('input');
    input.addEventListener('change', function(e){
     console.log(e.target.value)
    })
});
/* class person{
    public_constructor(name){
    this.name=name;
        console.log("hola soy una perosn", this.name);
    }
}*/
