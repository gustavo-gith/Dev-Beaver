<?php
session_start();
require 'conexao.php';

if (isset($_POST['create_usuario'])){
    $email = mysqli_real_escape_string($conexao, trim($_POST['email']));
    $nome = mysqli_real_escape_string($conexao, trim($_POST['nome']));
    $senha = isset($_POST['senha']) ? mysqli_real_escape_string($conexao, password_hash(trim($_POST['senha']), PASSWORD_DEFAULT)) : '';

    $sql = "INSERT INTO usuarios (email, nome, senha) VALUES ('$email', '$nome', '$senha')";

    mysqli_query($conexao, $sql);

    if(mysqli_affected_rows($conexao) > 0){
        $_SESSION['mensagem'] = 'Usuário criado com sucesso';
        header('Location: crud.php');
        exit;
    } else {
        $_SESSION['mensagem'] = 'Usuário não foi criado';
        header('Location: crud.php');
        exit;
    }
}

if (isset($_POST['update_usuario'])){
    $usuario_id = mysqli_real_escape_string($conexao, $_POST['usuario_id']);

    $email = mysqli_real_escape_string($conexao, trim($_POST['email']));
    $nome = mysqli_real_escape_string($conexao, trim($_POST['nome']));
    $senha = mysqli_real_escape_string($conexao, trim($_POST['senha']));

    $sql = "UPDATE usuarios SET nome = '$nome', email = '$email'";

    if (!empty($senha)) {
        $sql .= ", senha='" . password_hash($senha, PASSWORD_DEFAULT) . "'";
    }

    $sql .= " WHERE id = '$usuario_id'";

    mysqli_query($conexao, $sql);

    if(mysqli_affected_rows($conexao) > 0){
        $_SESSION['mensagem'] = 'Usuário atualizado com sucesso';
        header('Location: crud.php');
        exit;
    } else {
        $_SESSION['mensagem'] = 'Usuário não foi atualizado';
        header('Location: crud.php');
        exit;
    }
}

if (isset($_POST['delete_usuario'])){
    $usuario_id = mysqli_real_escape_string($conexao, $_POST['delete_usuario']);

    $sql = "DELETE FROM usuarios WHERE id = '$usuario_id'";
    mysqli_query($conexao, $sql);

    if(mysqli_affected_rows($conexao) > 0){
        $_SESSION['mensagem'] = 'Usuário deletado com sucesso';
        header('Location: crud.php');
        exit;
    } else {
        $_SESSION['mensagem'] = 'Usuário não foi deletado';
        header('Location: crud.php');
        exit; 
    }
}

?>