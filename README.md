<b><h1 align="center">UserHelp</h2></b>

<p align="center">
    Blog administrativo, com o objetivo de criação de artigos com diversas temáticas
</p>

<br>

### ⚙ **Demonstração do Site**

Aqui está uma demonstração em vídeo do blog hospedado em localhost. (<a href="https://www.youtube.com/watch?v=wbzXr2pcUIU&ab_channel=GuilhermeLib%C3%B3rio">Clique aqui</a>) 

<a href="https://www.youtube.com/watch?v=wbzXr2pcUIU&ab_channel=GuilhermeLib%C3%B3rio"><img  width= "80%" src="https://github.com/devliborio/user-images/blob/master/Img/user-help.png?raw=true"/></a>

---

### ℹ️ **Como funciona o Projeto**

Basicamente ao entrar no site você visualizara a homepage onde iram estár todos os artigos cadastrados no site assim como as categorias que cada um pertence.

Ao clicar em ler artigo, você sera redirecionado ao conteudo do artigo, e basicamente é isso, você pode usar a navbar para navegar entre as categorias do blog e ler os artigos pertencente a cada uma.

Bom para que você não seja só um leitor e sim um usuario definitivo do blog, ao você tentar acessar tanto o painel de categorias, quanto o painel de artigos você será automaticamente redirecionado a pagina de login, onde se você não tiver um login, vai ser preciso que você se cadastre no blog para ter acesso a esses paineis e é simplesmente nisso que o site é baseado resumidamente.

Bom a lógica dele funcina da seguinte forma:

- Ao entrar no site você já é redirecionado a rota inicial do projeto a `"/"` ou `"Home Route"` e nela você poderia visualizar todos os artigos.

- No nivel de acesso basico de um usuario sem cadastro no banco de dados, ele só poderá ter acesso a ações de leitura no blog, para se cadastrar é bem simples, basta clicar no botão `cadastrar` no canto superior direito, onde você será redirecionado para a rota `/create/users` onde irá ter um formulario para o cadastro. Bom um ponto importante nesse passo de cadastro é que foi usado o `bcrypt` para transformar a senha cadastrada do usuario em um `hash` ou seja, é um método de segurança a mais, tanto para o usuario, quanto eticamente para o dono da aplicação. Também nesse etapa de cadastro foram feitas diversas condições para que o usuario não cadastre o mesmo e-mail que outra pessoa ou que ele não possa enviar um email `undefined` ou `null`.  

- Agora uma vez cadastrado no blog, você tem o acesso nivel ADMIN que permite que você crie novas categorias, edite elas e também exclua, são ações totalemente destrutivas e irreversiveis onde uma vez feita, não podera ser desfeita, você também poderá fazer os mesmo processos para as categorias, tendo a possibilidade de relacionar os artigos com as categorias já que na configuração do nosso banco de dados atribuimos, uma relação `1 p 1` e `1 p M` onde 1 categoria se relaciona com mutios artigos e 1 artigo se relaciona com uma categoria, poderia ser feita com apenas um tipo de relacionamento mas foi prefirivel até por testes de estudo, usar as duas.

> **Note**
> Foi usado o EJS (view engine) para renderizar os códigos HTML no node.js, body-parser para tratar os formulários no node, arquitetura MVC para organizar as rotas e os models da aplicação e também foi utilizado o CRUD, assim com o tinyMCE para deixar o textarea mais completo e robusto na criação dos artigos. Bom também foi usado o slugify para transformar o titulo das categorias e artigos no estilo slug e o sequelize para fazer conexão com o banco de dados (mysql).
---

### **Referencia**

- [Formação Node.js](https://www.udemy.com/course/formacao-nodejs/)

<br>

### 🙋‍♂️ **Support**

💙 Se você gostou do projeto dẽ uma ⭐ e compartilhe com os amigos!
