<?php 

$data =  file_get_contents('data.json');
$array = json_decode($data, true); //jika ditambah true jadi array assosiatif
// echo $array;
// var_dump($array);
echo $array[0]["pembimbing"]["pembimbing2"];
?>