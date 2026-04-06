const express = require('express');
const cors = require('cors');
app.use(cors()); //Permite que o HTML acesse a API
const { RouterOSAPI } = require('node-routeros');

const app = express();
app.use(express.json()); // Habilita o recebimento de JSON

// Configurações do MikroTik
const mkConfig = {
    host: '192.168.88.1',
    user: 'admin',
    password: 'admin',
    port: 8728
};

// Rota POST para cadastrar cliente
app.post('/clientes', async (req, res) => {
    const { nome, senha, perfil } = req.body;

    // Validação básica
    if (!nome || !senha) {
        return res.status(400).json({ erro: 'Nome e senha são obrigatórios.' });
    }

    const conn = new RouterOSAPI(mkConfig);

    try {
        await conn.connect();
        
        // Adiciona no MikroTik
        await conn.write('/ppp/secret/add', 
            [
            `=name=${nome}`,
            `=password=${senha}`,
            `=profile=${perfil || 'default'}`,
            `=service=pppoe`
        ]);

        res.status(201).json({ mensagem: `Cliente ${nome} cadastrado com sucesso! `});
    } catch (err) {
        res.status(500).json({ erro: `'Falha no MikroTik', detalhe: err.message` });
    } finally {
        conn.close();
    }
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
