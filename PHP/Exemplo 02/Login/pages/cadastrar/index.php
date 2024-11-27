<?php
require_once __DIR__ . "/../../backend/controller/userController.php";

$userController = new UserController();

if(isset($_GET["id"])){
    $id = $_GET["id"];
    $usuario = $userController->GetUserById($id);
}

if($_SERVER["REQUEST_METHOD"] == "POST"){
    $nome = $_POST["nome"];
    $senha = $_POST["password"];

    if (empty($nome) || empty($senha)) {
        echo "Todos os campos são obrigatórios"; 
    } else {
        $userController->CreateUser($nome,$senha);
    }
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <form method="POST">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" value="<?php echo $usuario["nome"];?>">

        <label for="password">Senha:</label>
        <input type="password" id="password" name="password" value="<?php echo $usuario["senha"]?>">

        <button type="submit">Cadastrar</button>

    </form>
    
</body>
</html>