// console.log("Hola mundo")
//DOM
// let tabla = document.querySelector(".table");
// console.log(tabla);

//obtener los elementos de la clase close
let links = document.querySelectorAll(".close");

links.forEach(function(link){
  //Agregar un evento click a cada uno de ellos - case sensitive
  link.addEventListener("click",function(ev){
  ev.preventDefault();
  let content = document.querySelector(".Content");

 //quitarle las clases de animacion que ya tiene
 content.classList.remove("fadeInDown");
 content.classList.remove("animated");

 //Agregar clases para animar su salida fadeOutUp
 content.classList.add("fadeOutUp");
 content.classList.add("animated");

 setTimeout(function(){location.href = "/";},600);

return false;
});

});
