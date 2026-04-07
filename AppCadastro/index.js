const express = require('express');
const setupDb = require('./database');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('cadastro');
});

app.post('/cadastrar', async (req, res) => {
    const db = await setupDb();
    const { nome, rua, numero, bairro, cidade, cpf, plano, valor, velocidade } = req.body;
    
    await db.run(
        `INSERT INTO usuarios (nome, rua, numero, bairro, cidade, cpf, plano, valor, velocidade) 
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [nome, rua, numero, bairro, cidade, cpf, plano, valor, velocidade]
    );
    
    res.redirect('/usuarios');
});

// Nova rota para listar usuários
app.get('/usuarios', async (req, res) => {
    const db = await setupDb();
    const listaUsuarios = await db.all('SELECT * FROM usuarios');
    res.render('lista', { usuarios: listaUsuarios });
});

// ROTA PARA EXCLUIR
app.get('/excluir/:id', async (req, res) => {
    const db = await setupDb();
    await db.run('DELETE FROM usuarios WHERE id = ?', [req.params.id]);
    res.redirect('/usuarios');
});

// ROTA PARA ABRIR TELA DE EDIÇÃO
app.get('/editar/:id', async (req, res) => {
    const db = await setupDb();
    const usuario = await db.get('SELECT * FROM usuarios WHERE id = ?', [req.params.id]);
    res.render('editar', { user: usuario });
});

// ROTA PARA SALVAR A EDIÇÃO (POST)
app.post('/atualizar/:id', async (req, res) => {
    const db = await setupDb();
    const { nome, rua, numero, bairro, cidade, cpf, plano, valor, velocidade } = req.body;
    
    await db.run(
        `UPDATE usuarios SET nome=?, rua=?, numero=?, bairro=?, cidade=?, cpf=?, plano=?, valor=?, velocidade=? WHERE id=?`,
        [nome, rua, numero, bairro, cidade, cpf, plano, valor, velocidade, req.params.id]
    );
    res.redirect('/usuarios');
});


app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"));
