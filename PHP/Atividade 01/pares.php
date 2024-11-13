<?php
function somaPares($lista) {
    $soma = 0;
    foreach ($lista as $valor) {
        if ($valor % 2 == 0) {
            $soma += $valor;
        }
    }
    return $soma;
}

$lista = [1, 2, 3, 4];
$resultado = somaPares($lista);
echo "A soma dos números pares é: $resultado\n";
?>