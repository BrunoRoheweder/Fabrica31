<?php
session_start();
if (!$_SESSION["id_usuario"]) {
    header("location: ../../index.php");
}
require_once __DIR__ . "/../../backend/controller/userController.php";
$userController = new UserController();
$usuarios = $userController->GetAllUser();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <title>Document</title> 
</head>
<body>
    
    <h2>Lista de usuarios</h2>
    <table border=1>
        <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Senha</th>
            <th>Acao</th>
        </tr>

        <a href="../cadastrar/index.php">Cadastrar</a>
        <?php foreach ($usuarios as $usuario) {
        ?>
            <tr>
                <td><?php echo $usuario["id"] ?></td>
                <td><?php echo $usuario["nome"] ?></td>
                <td><?php echo $usuario["senha"] ?></td>
                <td>
                    <a href="../cadastrar/index.php?id=<?php echo $usuario["id"]?>">Editar</a>
                </td>
            </tr>
        <?php
        }
        ?>
    </table>

</body>
</html>
