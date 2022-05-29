const opciones = document.getElementById("opciones")
const myHero = document.getElementById("0") //los id son numeros que corresponden al id en las tablas 
const violetEv = document.getElementById("1")
const deathNote = document.getElementById("2")
const spyX = document.getElementById("3")
const tenseiS = document.getElementById("4")




/*INTENTO DE HACER QUE DEPENDIENDO DEL ANIME SE MUESTRE LA INFORMACION*/
myHero.addEventListener("click", (evento)=>{
    texto.style.display = "block";
    console.log(1)
    console.log(myHero)
    fetch("dynamics/php/anime.php?id="+1)
    fetch("dynamics/php/anime.php")
    .then((response)=>{
        return response.json();
    })
    .then((datosJSON)=>{
        console.log(datosJSON);
        let selectTipos = document.getElementById("select-tipos");
        for(tipo of datosJSON){
            console.log("si")
            selectTipos.innerHTML+="<option value='"+tipo.id+"'>"+tipo.nombre+"</option>";
        }
    });
})

//profe
divResultados.addEventListener("click", (evento)=>{
    if(evento.target.classList.contains("coincidencia")){
      let id = evento.target.dataset.id;

      fetch("dynamics/php/pokemon.php?id="+id)
        .then((response)=>{
          return response.json();
        })
        .then((datosJSON)=>{
          if(datosJSON.ok == true){
            divDatos.innerHTML="<div class='dato'><strong>Nombre</strong>"+datosJSON.datos.nombre+"</div>";
            divDatos.innerHTML+="<div class='dato'><strong>Altura</strong>"+datosJSON.datos.altura+"</div>";
            divDatos.innerHTML+="<div class='dato'><strong>Peso</strong>"+datosJSON.datos.peso+"</div>";
            divDatos.innerHTML+="<div class='dato'><strong>Tipo</strong>"+datosJSON.datos.tipo+"</div>";
            divDatos.innerHTML+= "<button data-id=" + id + "id='btn-eliminar'>Eliminar pokemon</button>";
            divDatos.style.display = "flex";
          }
        });
    }
  });



