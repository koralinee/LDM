import { Sequelize } from "sequelize";

const sequelize = new Sequelize('dbAtv', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(() => {
    console.log('Conectado com sucesso!')
}).catch(erro => {
    console.log('Falha ao se conectar ' + erro)
})

const Clientes = sequelize.define('cliente', {
    nome: {
        type: Sequelize.STRING
    },
    endereco: {
        type: Sequelize.STRING
    },
    bairro: {
        type: Sequelize.STRING
    },
    cep: {
        type: Sequelize.STRING
    },
    telefone: {
        type: Sequelize.STRING
    },
    celular: {
        type: Sequelize.STRING
    }
})

Clientes.sync({ force: true })

Clientes.create(
    {
        nome: 'Karoline de Souza da Silva',
        endereco: 'Rua guaxuma',
        bairro: 'Vila Rio Branco',
        cep: '03877000',
        telefone: '(11) 20169-5884',
        celular: '(11)  94823-9482'
    },
    {
        nome: 'Guilherme Vinícius Braz',
        endereco: 'Rua andreia paula',
        bairro: 'Bosque Maia',
        cep: '029309492',
        telefone: '(11) 2348-3459',
        celular: '(11) 92490-3494'
    },
    {
        nome: 'Julia Ribeiro Silva',
        endereco: 'Rua Leopoldina Almeida',
        bairro: 'Penha de França',
        cep: '93577222',
        telefone: '(11) 2033-11875',
        celular: '(11) 99490-3985'
    },
)