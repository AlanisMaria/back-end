const livro = {
    titulo: "A metamorfose",
    autor: "Frank Kafka",
    ano: "1915",
    resumo: function(){
        return 'Titulo ${A metamorfose.titulo}, Autor: ${Frank Kafka.autor}, Ano: ${1915.ano}';
    }
};
console.log(livro.resumo());