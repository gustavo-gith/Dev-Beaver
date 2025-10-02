<?php
define('HOST', '127.0.0.1');
define('USUARIO', 'root');
define('SENHA', 'Home@spSENAI2025!');
define('DB', 'devbeavers');

$conexao = mysqli_connect(HOST, USUARIO, SENHA, DB) or die ('Não foi possível conectar');

?>