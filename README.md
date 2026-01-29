MongoDB Aggregations Project 🚀

Este repositório contém as soluções dos desafios do projeto Aggregations, desenvolvido durante o módulo de Back-end na Trybe. O objetivo principal foi consolidar o conhecimento sobre o Aggregation Framework do MongoDB, utilizando pipelines para processar dados de forma eficiente no lado do servidor.

Neste projeto, executei de forma autônoma 14 desafios que exploram diversos estágios e operadores de agregação em três datasets distintos: filmes (IMDB), rotas aéreas e registros de uso de bicicletas.

🛠 Habilidades Desenvolvidas

Execução de buscas complexas utilizando o MongoDB.

Criação de pipelines de agregação com múltiplos estágios.

Utilização de operadores aritméticos, de string e de data.

Transformação e modelagem de dados diretamente na query.

Uso de operadores como $match, $project, $group, $unwind, $lookup, $addFields, entre outros.

📂 Estrutura do Projeto

O desenvolvimento foi organizado na pasta challenges/, onde cada arquivo .js corresponde a um requisito específico:

Desafios 1 a 7: Análise de dados cinematográficos (Coleção movies).

Desafio 8: Análise de alianças e rotas aéreas (Coleção air_alliances e air_routes).

Desafios 9 a 14: Análise de dados de mobilidade/bicicletas (Coleção trips).

🚀 Como Executar

Clone o repositório:

git clone https://github.com/seu-usuario/nome-do-repositorio.git

Instale as dependências:

npm install

Restaure o banco de dados: Certifique-se de que o MongoDB está rodando localmente e execute:

DBNAME=aggregations ./scripts/resetdb.sh assets

Para rodar os testes:

./scripts/evaluate.sh

⚠️ Observações Técnicas

As queries foram escritas seguindo o padrão MQL (Mongo Query Language).

O projeto utiliza o ESLint para garantir a padronização e boas práticas do código.

Todos os requisitos foram desenvolvidos respeitando as restrições de performance e formatação solicitadas.

Projeto desenvolvido integralmente por mim como parte dos meus estudos de desenvolvimento Web.