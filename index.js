let sequelize = require("sequelize");

let conexao = new sequelize (
    "postgres://lspugqzpqiurbc:6b080a2f1e9883a30c99cf8692d835df5daf1b9d7e3f80c65f705f5eb1ca153d@ec2-52-22-161-59.compute-1.amazonaws.com:5432/dc1aaa46t0nfop",
    {
        dialect: "postgres",
        dialectOptions: {
            ssl: {
            rejectUnauthorized: false
            }
        }
    }
);
var Pizza = conexao.define("Pizza", 
{
    id: {
        type: sequelize.INTEGER,
        primaryKey: true
    }

    ,

    nome: {
        type: sequelize.STRING,
        allownull: true
    }

    ,

    tamanho: sequelize.STRING

    ,

    pedido: sequelize.STRING
})

module.exports = conexao;

async function sincronizar (){
    await conexao.sync();
}

let pizza1 = 
{nome : "Calabresa", 
id : 1, 
tamanho : "Grande", 
pedido : "Rua Hermes Lira, 365"};

let pizza2 = 
{nome : "Quatro queijos", 
id : 2, 
tamanho : "Família", 
pedido : "Centro de Arara, 452"};

let pizza3 = 
{nome : "Chocolate", 
id : 3, 
tamanho : "Pequena", 
pedido : "Rua Marísio Moreno, 238"};

let pizza4 = 
{nome : "Frango Catupiri", 
id : 4, 
tamanho : "Média", 
pedido : "Rua da Areia, 541"};

let pizza5 = 
{nome : "Calabrera e Quatro queijos", 
id : 5, 
tamanho : "Grande", 
pedido : "Rua Hermes Lira, 365. Metade de cada sabor"};

async function inserir (objeto){
    let r = await Pizza.create(objeto);
    console.log(r);
}

async function consultar (){
    let r = await Pizza.findAll();
    console.log(r);
}

// sincronizar(); (Já foi)

// inserir(pizza1);

// inserir(pizza2);

// inserir (pizza3);

// inserir (pizza4);

// inserir (pizza5)

consultar();