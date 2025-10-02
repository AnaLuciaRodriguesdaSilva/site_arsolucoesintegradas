
// utilizado para fazer vinculos de transações
$pdo -> beginTransaction();

// fazer o comando de inserir dentro da tabela de produtos
$sqlProdutos = "INSERT INTO" Produtos(nome, descricao, quantidade, preco, tamanho, cor, codigo, preco_promocional,Marcas_idMarcas)

$stmProdutos = $pdo ->prepare($sqlProdutos);

$inserirProdutos=$stmProdutos ->execute([
    ]);