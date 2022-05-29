window.addEventListener("load", () =>{
    const opciones = document.getElementById("opciones");
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
            console.log(datosJSON);
            if(anime_elegido.id === '0'){
                texto.style.display = "block";
                //console.log(evento.target.id)
                //console.log()
                /*fetch("dynamics/php/anime.php?id="+0)
                fetch("dynamics/php/anime.php")*/
            //}
            /*let selectTipos = document.getElementById("select-tipos");
            for(tipo of datosJSON){
                console.log("si")
                selectTipos.innerHTML+="<option value='"+tipo.id+"'>"+tipo.nombre+"</option>";*/
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

})



