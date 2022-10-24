const alunoRouter = require('express').Router();
const alunos = [
    {nome: 'Marcos', idade: 21},
    {nome: 'Ana', idade: 22},
    {nome: 'Hugo', idade: 23},
    {nome: 'Diego', idade: 24},
    {nome: 'Maria', idade: 25},
];

alunoRouter.get('/aluno/todos', (req, res) => {
    try {
        res.json(alunos);
    } catch (error) {
        res.json({erro: true, mensagem: 'Não foi possivel recuperar os dados.'});
    }
});

alunoRouter.get('/aluno/:nome', (req, res) => {
    try {
        const alunoEncontrado = alunos.find( (item) => {
            return item.nome === req.params.nome;
        });
        res.json(alunoEncontrado);
    } catch (error) {
        res.json({erro: true, mensagem: 'Não foi possivel recuperar os dados.'});
    }
});

module.exports = alunoRouter;