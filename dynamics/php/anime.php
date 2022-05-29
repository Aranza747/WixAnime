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
    $id=(isset($_POST['id']) && $_POST["id"] != "")? $_POST['id'] : false;

    $sql = "SELECT id_anime, nombre, descripcion, publicacion FROM anime WHERE id_anime = '$id'";
    $res = mysqli_query($con, $sql);

    $resultados = [];

    if($res == true){
      $row = mysqli_fetch_assoc($res);
      $resultados[] = $row;
    }else{
      echo mysqli_error($con);
    }
  
    echo json_encode($resultados);
}