<?php

$servername = "localhost";
$username = "root";
$password = "Home@spSENAI2025!";
$banco = "devbeaver";

// Cria a conexão
$conn = new mysqli($servername, $username, $password, $banco);

// Verifica a conexão
if ($conn->connect_error) {
    die("Erro na conexão: " . $conn->connect_error);
}

?>