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
    $sql = "SELECT * FROM anime";
    $res = mysqli_query($con, $sql);
    $resultados = [];
    while($row = mysqli_fetch_assoc($res))
    {
      $resultados[] = array("id" => $row["id_anime"], "genero" => $row["id_genero"],"nombre" => $row["nombre"],"descripcion" => $row["descripcion"],"publicacion" => $row["publicacion"]);
    }
  
    echo json_encode($resultados);
}