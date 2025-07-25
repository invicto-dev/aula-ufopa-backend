# README - Guia Completo para Iniciantes (Usando VS Code)

## Aula UFOPA Backend

Bem-vindo! Este guia vai te ajudar a rodar este projeto backend no seu computador com Windows, mesmo que você nunca tenha usado Git, Node.js, Render.com ou o terminal. Aqui, você vai aprender a fazer tudo usando o Visual Studio Code (VS Code), um editor de código fácil de usar.

---

### 1. Instalando o Node.js

O Node.js é necessário para rodar este projeto.

1. Acesse o site oficial: https://nodejs.org/
2. Clique em “Download for Windows” (escolha a versão LTS recomendada).
3. Quando o download terminar, clique duas vezes no arquivo e siga as instruções para instalar.

---

### 2. Instalando o Git

O Git é necessário para baixar o projeto do GitHub.

1. Acesse: https://git-scm.com/download/win
2. Baixe o instalador e execute-o.
3. Siga as instruções (pode deixar as opções padrão).

---

### 3. Instalando o Visual Studio Code (VS Code)

1. Acesse: https://code.visualstudio.com/
2. Clique em “Download for Windows” e instale normalmente.

---

### 4. Baixando o Projeto

Se você recebeu o projeto em um arquivo `.zip`:
1. Extraia o arquivo para uma pasta fácil de encontrar, como `Documentos` ou `Área de Trabalho`.

Se for baixar do GitHub:
1. Abra o VS Code.
2. Clique em “Exibir” > “Terminal” (ou use o atalho `Ctrl + `).
3. No terminal integrado, navegue até a pasta onde quer salvar o projeto. Por exemplo:
   cd %USERPROFILE%\Documents
4. Baixe o projeto com:
   git clone https://github.com/invicto-dev/aula-ufopa-backend.git
   (Troque pelo link do seu repositório, se for diferente.)

---

### 5. Abrindo o Projeto no VS Code

1. No VS Code, clique em “Arquivo” > “Abrir Pasta...” e escolha a pasta do projeto (`aula-ufopa-backend`).
2. O VS Code vai abrir a pasta e mostrar os arquivos do projeto.

---

### 6. Configurando o Git pela Primeira Vez

No terminal integrado do VS Code, digite:
   git config --global user.name "Seu Nome"
   git config --global user.email "seuemail@exemplo.com"
(Troque pelo seu nome e e-mail.)

Para conferir se ficou certo:
   git config --global --list
O nome e o e-mail devem aparecer na lista.

---

### 7. Instalando as Dependências

No terminal integrado do VS Code, digite:
   npm install
Isso vai instalar tudo que o projeto precisa para funcionar.

---

### 8. Rodando o Projeto Localmente

Ainda no terminal do VS Code, digite:
   npm start
Se tudo der certo, o projeto estará rodando! Normalmente, ele estará disponível em http://localhost:3000 (ou outro endereço indicado no terminal).

---

### 9. Subindo o Projeto para o GitHub (caso ainda não esteja lá)

1. Crie uma conta em https://github.com/
2. No GitHub, clique em “New repository” e crie um repositório vazio.
3. No terminal do VS Code, dentro da pasta do projeto, digite:
   git init
   git add .
   git commit -m "Primeiro commit"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
   git push -u origin main
(Troque SEU_USUARIO e SEU_REPOSITORIO pelo seu usuário e nome do repositório.)

---

### 10. Subindo o Projeto no Render.com

1. Crie uma conta em https://render.com/
2. Clique em “New” > “Web Service”.
3. Conecte sua conta do GitHub ao Render (siga as instruções na tela).
4. Escolha o repositório do seu projeto.
5. Configure:
   - **Name:** Escolha um nome para seu serviço.
   - **Environment:** Node
   - **Build Command:** npm install
   - **Start Command:** npm start
6. Clique em “Create Web Service”.
7. Aguarde alguns minutos até o Render instalar e rodar seu projeto.
8. Quando terminar, o Render vai mostrar um link para acessar seu projeto online!

---

### Dicas Finais

- Sempre use o terminal integrado do VS Code para rodar os comandos.
- Se der erro, leia a mensagem com atenção. Muitas vezes ela já diz o que está faltando.
- Procure no Google ou peça ajuda a mim pedindo meu numero ao professor.
- Não desista! Com prática, tudo fica mais fácil.

---
