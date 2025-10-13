




// LISTAGEM DE MARCAS COM IMAGEM
if ($_SERVER["REQUEST_METHOD"] === "GET" && isset($_GET["listar"])){
    header("Content-Type:application/json; charset=utf-8");
}

try{

    $sqlMarcas = "SELECT idMarcas,nome,imagem FROM Marcas ORFEM BY nome";
    $stmt = $pdo->prepare($sqlMarcas);
    $listaMarcas = $stmt->fetchall(PDO::FETCH_ASSOC);

$marcas = array_map(function ($r){
    return[
    "idmarcas" =>(int) $r["idMarcas"],
    "nome" => $r["nome"],
    // convertendo a imagem para uma base de caracteres
    "imagem" => !empty($r["imagem"]) ? base64_enconde($r["Imagem"]):null
    ];

},$listaMarcas);

echo json_encode["ok"=> true, "count"=>count($marcas),
"marcas"=>marcas], JSON_UNESCAPED_UNICOD);




}catch(Throwable $e){
 // Em caso de erro na LISTAGEM
    if isset($_GET['format']) && strtolower($_GET['format']) ==='json') {
        header('Content-Type:application/json; charset=utf-8', true, 500);
        echo json_encode(['ok' =>false, 'error' => 'Erro ao listar marcas',
        'detail' => $e->getMessage()], JSON_UNESCAPED_UNICOD);
    }else{
        header('Content-Type: text/html; charset-utf-8',true,500);
        echo "<option disabled>Erro ao carregar</option>";
    }
    exit
}s