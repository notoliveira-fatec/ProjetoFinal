const express = require('express');

const router = express.Router();

router.get("/", (req, res) => {
    let obj ={
        nome:req.query.nome
    };
    
    res.render('home', obj)
});

router.get("/grade", (req, res) => {
    let gradeFatec = { 
        grade:[
                {
                    materia:'Gestão Ágil de Projetos de Software',
                    as: '4'
                },
                {
                    materia:'Banco de Dados - Não relacional',
                    as: '4'
                },
                {
                    materia:'Interação humano computador',
                    as: '2'
                },
                {
                    materia:'Técnica de Programação II',
                    as: '4'
                },
                {
                    materia:'Inglês I',
                    as: '2'
                },
                {
                    materia:'Desenvolvimento Web III',
                    as: '4'
                },
                {
                    materia:'Álgebra Linear',
                    as: '4'
                }
            ]
       }; 
       res.render('grade', gradeFatec);
});

router.get('/historico',(req, res) => {
    let histFatec = { 
      historico:
        [
            {
                materia:'Estágio Supervisionado em Desenvolvimento de Software Multiplataforma',
                periodo: '20231', 
                observacao: 'Em Curso'
            },
            {
                materia:'Gestão Ágil de Projetos de Software',
                periodo: '20231', 
                observacao: 'Em Curso'
            },
            {
                materia:'Algoritmo e Lógica de Programação',
                periodo: '20221', 
                observacao: 'Aprovado'
            },
            {
                materia:'Modelagem de Banco de Dados',
                periodo: '20221', 
                observacao: 'Aprovado'
            },
            {
                materia:'Banco de Dados - Relacional',
                periodo: '20222',
                observacao: 'Aprovado'
            },
            {
                materia:'Banco de Dados - Não relacional',
                periodo: '20231', 
                observacao: 'Em curso'
            },
            {
                materia:'Estrutura de Dados',
                periodo: '20222',
                observacao: 'Aprovado'
            },
            {
                materia:'Engenharia de Software I',
                periodo: '20221',
                observacao: 'Aprovado'
            },
            {
                materia:'Engenharia de Software II',
                periodo: '20222', 
                observacao: 'Aprovado'
            },
            {
                materia:'Interação Humano Computador',
                periodo: '20231', 
                observacao: 'Em Curso'
            },
            {
                materia:'Técnica de Programação I',
                periodo: '20222', 
                observacao: 'Aprovado'
            },
            {
                materia:'Técnica de Programação II',
                periodo: '20231', 
                observacao: 'Em Curso'
            },
            {
                materia:'Inglês I',
                periodo: '20231', 
                observacao: 'Em Curso'
            },
            {
                materia:'Sistemas Operacionais e Redes de Computadores',
                periodo: '20221', 
                observacao: 'Aprovado'
            },
            {
                materia:'Desenvolvimento Web I',
                periodo: '20221', 
                observacao: 'Aprovado'
            },
            {
                materia:'Desenvolvimento Web II',
                periodo: '20231', 
                observacao: 'Em Curso'
            },
            {
                materia:'Desenvolvimento Web III',
                periodo: '20231', 
                observacao: 'Em Curso'
            },
            {
                materia:'Design Digital',
                periodo: '20221', 
                observacao: 'Aprovado'
                
            },
            {
                materia:'Matemática para Computação',
                periodo: '20222', 
                observacao: 'Aprovado'
            }
        ]
    }; 
    res.render('historico', histFatec);
});

module.exports = router;