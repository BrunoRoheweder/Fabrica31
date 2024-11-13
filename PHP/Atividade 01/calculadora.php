<?php
function calculadora($num1, $num2, $op) {
    switch ($op) {
        case 'soma':
            return $num1 + $num2;
        case 'subtracao':
            return $num1 - $num2;
        case 'multiplicacao':
            return $num1 * $num2;
        case 'divisao':
            if ($num2 != 0) {
                return $num1 / $num2;
            } else {
                return 'Erro: divisão por zero';
            }
        default:
            return 'Operação inválida';
    }
}

$num1 = rand(1, 10);
$num2 = rand(1, 10);

$ops = ['soma', 'subtracao', 'multiplicacao', 'divisao'];

echo "Resultado das operações entre os números $num1 e $num2:\n";


foreach ($ops as $op) {
    echo ucfirst($op) . ": " . calculadora($num1, $num2, $op) . "\n";
}
?>
