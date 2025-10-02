<?php
include('conexaocadastro.php');

$email = $_POST['email'];
$usuario = $_POST['usuario'];
$senha = $_POST['senha'];   


$result = mysqli_query($conn, "INSERT INTO usuarios (email, usuario, senha) 
VALUES ('$email', '$usuario', '$senha')");

?>
