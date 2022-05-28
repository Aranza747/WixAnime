const opciones = document.getElementById("opciones")
const myHero = document.getElementById("0") //los id son numeros que corresponden al id en las tablas 
const violetEv = document.getElementById("1")
const deathNote = document.getElementById("2")
const spyX = document.getElementById("3")
const tenseiS = document.getElementById("4")




/*INTENTO DE HACER QUE DEPENDIENDO DEL ANIME SE MUESTRE LA INFORMACION*/
myHero.addEventListener("click", (evento)=>{
    texto.style.display = "block";
   // console.log(1)
    console.log(myHero)
    fetch("dynamics/php/anime.php?id="+id)
    // fetch("dynamics/php/anime.php")
    // .then((response)=>{
    // return response.json();
    // })
    // .then((datosJSON)=>{
    // console.log(datosJSON);
    // //let selectTipos = document.getElementById("select-tipos");
    // for(tipo of datosJSON){
    //     console.log("si")
    //     // selectTipos.innerHTML+="<option value='"+tipo.id+"'>"+tipo.nombre+"</option>";
    // }
    // });

})



