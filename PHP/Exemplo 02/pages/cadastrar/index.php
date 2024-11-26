<?php

if($_SERVER["REQUEST_METHOD"] == "POST"){
    
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
        <input type="text" id="nome" name="nome">

        <label for="password"></label>
        <input type="password" id="password" name="password">

        <button type="submit">Cadastrar</button>
    </form>

</body>
</html>