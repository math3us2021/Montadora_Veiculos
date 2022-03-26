module.exports = {
    menu
}

function menu (req,res) {
    res.render('menu.ejs',
        {title: 'Montadora de veiculos',
            mensagem: 'Iniciando com NodeJS e Express',
            titulo: 'Aula do Neto é as segundas',
            conteudo: 'Corpo da página - vh x vw',
            autor: 'Matheus Barbosa Ferreira     2°DSM'


    })
}