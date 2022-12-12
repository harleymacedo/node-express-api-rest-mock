const professorRouter = require('express').Router();
const professores = [
    {nome: 'Marcos', area: 'Banco de dados'},
    {nome: 'Ana', area: 'UX Design'},
    {nome: 'Hugo', area: 'Programação'},
    {nome: 'Diego', area: 'Inteligência artificial'},
    {nome: 'Maria', area: 'Programação'},
    {nome: 'Hugo', area: 'Engenharia de software'},
    {nome: 'Danilo', area: 'Programação web e mobile'},
    {nome: 'Yolanda', area: 'Engenharia de software'},
];

professorRouter.get('/professor/todos', (req, res) => {
    try {
        res.json(professores);
    } catch (error) {
        res.json({erro: true, mensagem: 'Não foi possivel recuperar os dados.'});
    }
});

professorRouter.get('/professor/:nome', (req, res) => {
    try {
        const professorEncontrado = professores.find( (item) => {
            return item.nome === req.params.nome;
        });
        res.json(professorEncontrado);
    } catch (error) {
        res.json({erro: true, mensagem: 'Não foi possivel recuperar os dados.'});
    }
});

module.exports = professorRouter;