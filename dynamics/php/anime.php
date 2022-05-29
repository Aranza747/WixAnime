<?php

require "config.php";
$con = mysqli_connect($db_host, $db_user, $db_pass, $db_schema);

if(!$con)
{
    echo "No se pudo conectar a la base de datos";
}
else
{
    //echo "si se pudo conectar";
    $id=$_POST['id'];

    $sql = "SELECT id_anime, nombre, descripcion, publicacion FROM anime WHERE id_anime = '$id'";
    $res = mysqli_query($con, $sql);

    $resultados = [];
    $row = mysqli_fetch_assoc($res)
    $resultados[] = $row /*array("id" => $row["id_anime"],"nombre" => $row["nombre"],"descripcion" => $row["descripcion"],"publicacion" => $row["publicacion"])*/;

    /*if($res == true){
      echo "Se pudo";
    }else{
      echo mysqli_error($con);
    }*/
  
    echo json_encode($resultados);
}