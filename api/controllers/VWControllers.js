const { response } = require('express')
const req = require('express/lib/request')
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const axios = require('axios')
const cors = require('cors')


module.exports = {
    VWMenu,
    Brasilia,
    Mecanica,

}

function VWMenu (req,res) {
    res.render('VW/frm_VWMenu.ejs',
        {title: 'Menu VW',
            mensagem: 'Iniciando com NodeJS e Express',
            titulo: 'Aula do Neto é as segundas',
            conteudo: 'Corpo da página - vh x vw',
            autor: '2° DSM - Web II'
    })
}

function Brasilia(req,res) {
    res.render('VW/frm_Brasilia.ejs',
        {title: 'Brasilia',
            mensagem: 'Iniciando com NodeJS e Express',
            titulo: 'Saúde e esporte',
            conteudo: 'O homem moderno vem deixando de lado as práticas esportivas, o que muitas vezes leva a um estilo de vida sedentário e provoca distúrbios como má alimentação, obesidade, tabagismo, estresse, doenças coronarianas etc.\n ',
            autor:'Matheus Barbosa Ferreira - 2° DSM - Web II'


    })
}

function Mecanica (req,res) {
    res.render('VW/frm_Mecanica.ejs',
        {title: 'Mecânica',
            mensagem: 'Iniciando com NodeJS e Express',
            titulo: 'Aula do Neto é as segundas',
            conteudo: 'Corpo da página - vh x vw',
            autor: '2° DSM - Web II'
    })
}
