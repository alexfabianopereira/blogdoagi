# blogdoagi


Cenário: Pesquisa com resultados
Dado que eu estou na página de pesquisa do blog do Agi
Quando eu digito uma palavra-chave na caixa de pesquisa e clico na lupa
Então o sistema exibe uma lista de artigos relacionados à palavra-chave pesquisada.

Cenário: Pesquisa sem resultados
Dado que eu estou na página de pesquisa do blog do Agi
Quando eu digito uma palavra-chave na caixa de pesquisa e clico na lupa
Então o sistema informa que não foram encontrados artigos relacionados à palavra-chave pesquisada.

Cenário: Pesquisa com termo inválido
Dado que eu estou na página de pesquisa do blog do Agi
Quando eu digito um termo inválido (por exemplo, caracteres especiais ou números) na caixa de pesquisa e clico na lupa
Então o sistema informa que o termo pesquisado é inválido.

Cenário: Pesquisa em branco
Dado que eu estou na página de pesquisa do blog do Agi
Quando eu deixo a caixa de pesquisa em branco e clico na lupa
Então o sistema informa que é necessário digitar uma palavra-chave para realizar a pesquisa.
