<?php
//config
$dbh = new PDO('mysql:host=localhost;dbname=phpdasar','root','');
//query
$db = $dbh->prepare('SELECT * from karyawan');
$db->execute(); //execute pdo

$karyawan = $db->fetchAll(PDO::FETCH_ASSOC); //get array asoc

$data = json_encode($karyawan); //parsing to json

echo $data;
