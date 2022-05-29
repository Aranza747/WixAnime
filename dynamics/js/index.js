window.addEventListener("load", () =>{
    const opciones = document.getElementById("opciones");
    const texto = document.getElementById("texto");
    const nombre = document.getElementById("nombre");
    const genero = document.getElementById("genero");
    const descripcion = document.getElementById("descripcion");
    const publicacion = document.getElementById("publicacion");
    const personajes = document.getElementById("personajes");
    // const myHero = document.getElementById("0") //los id son numeros que corresponden al id en las tablas 
    // const violetEv = document.getElementById("1")
    // const deathNote = document.getElementById("2")
    // const spyX = document.getElementById("3")
    // const tenseiS = document.getElementById("4")

    /*INTENTO DE HACER QUE DEPENDIENDO DEL ANIME SE MUESTRE LA INFORMACION*/
    opciones.addEventListener("click", (evento)=>{
        const anime_elegido = evento.target; 
        const id_anime = anime_elegido.id;
        fetch("dynamics/php/anime.php?id="+ id_anime)
        .then((response)=>{
            return response.json();
        })
        .then((datosJSON)=>{
            if(datosJSON){
                texto.style.display = "block";
                // nombre.innerHTML = "";
            }
        });
        
        
    })

    //profe
    /*divResultados.addEventListener("click", (evento)=>{
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
    });*/

});



