let sequelize = require("sequelize");

let conexao = new sequelize (
    "postgres://mmsnfenjipqnzn:3a82a762e42943036f84b09967773de507c33cc817ed501d84ba63d8b1c4c7cb@ec2-54-145-102-149.compute-1.amazonaws.com:5432/dej7r2539euilt",
    {
        dialect: "postgres",
        dialectOptions: {
            ssl: {
            rejectUnauthorized: false
            }
        },
        define: {

                freezeTableName: true

        }
    }
);
var Disciplina = conexao.define("Disciplina", 
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

    area_de_conhecimento : {
      type: sequelize.STRING
    }

    ,

    quantidade: sequelize.INTEGER
    
    ,


});

var Exercicio = conexao.define("Exercicio", 
{
    id: {
        type: sequelize.INTEGER,
        primaryKey: true
    }

    ,

    nome_exercicio: {
        type: sequelize.STRING,
        allownull: true
    }

    ,

    alternativas_corretas : {
      type: sequelize.STRING
    }

    ,

    alternativas_incorretas: sequelize.STRING

    , 

    texto_base: sequelize.STRING(1000)

    ,

    texto_comando: sequelize.STRING(1000)

    ,

    nível: sequelize.STRING

    ,

    pontuacao: sequelize.DOUBLE

    ,

    nome_exercicio: sequelize.STRING 
});

var Assunto = conexao.define("Assunto", 
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
})

var Tem = conexao.define("Tem", 
{
    id_assunto: {
        type: sequelize.INTEGER
    }

    ,

    id_exercicios: {
        type: sequelize.INTEGER,
        allownull: true
    }
});

Disciplina.belongsToMany(Assunto, {through:"Possui"});
Assunto.belongsToMany(Disciplina, {through:"Possui"});

sincronizar();

let mat = {
    id: 1,
    nome: 'Matemática',

    area_de_conhecimento: 'Exatas'
}


let equacaodoprimeirograu = {
    id: 1,
    nome: 'Equação do primeiro grau'
}



let questão1 = { 
    id: 1,
    nivel: 'Fácil',
    nome_exercicio: 'Equação',
    alternativas_corretas: '5',
    alternativas_incorretas: (
        '7',
        '6',
        '9/2',
        '-2')
        ,
    texto_comando: 'A solução da equação 3x + 4 = 2x + 9 é'
}


let questão2 = { 
    id: 2,
    nivel: 'Fácil',
    nome_exercicio: 'Equação',
    alternativas_corretas: '6',
    alternativas_incorretas:( 
        '7',
        '5',
        '9/2',
        '-2'),

    texto_comando: 'A solução da equação 5x – 2 = x + 22 é'
}


let questão3 = { 
    id: 3,
    nivel: 'Fácil',
    nome_exercicio: 'Equação',
    alternativas_corretas: '7',
    alternativas_incorretas: (
         '5',
         '6',
         '9/2',
        '-2'
    ),
    texto_comando: 'A solução da equação x – 1 = 3x – 15 é'
}


let questão4 = { 
    id: 4,
    nivel: 'Fácil',
    nome_exercicio: 'Equação',
    alternativas_corretas: '-2',
    alternativas_incorretas: (
         '7',
         '6',
         '9/2',
        '5'
    ),
    texto_comando: 'A solução da equação 4x + 15 = x + 9 é'
}


let questão5 = { 
    id: 5,
    nivel: 'Fácil',
    nome_exercicio: 'Equação',
    alternativas_corretas: '9/2',
    alternativas_incorretas: (
        '-7/2',
        '6',
         '-2',
        '5'
    ),
    texto_comando: 'A solução da equação 3x – 7 = x + 2 é'
}


let questão6 = { 
    id: 6,
    nivel: 'Fácil',
    nome_exercicio: 'Equação',
    alternativas_corretas: '-7/2',
    alternativas_incorretas: (
         '9/2',
         '6',
         '-2',
        '5'
    ),
    texto_comando: 'A solução da equação 2x + 1 = 8x + 22 é'
}


let questão7 = { 
    id: 7,
    nivel: 'Fácil',
    nome_exercicio: 'Equação',
    alternativas_corretas: '10',
    alternativas_incorretas: (
        '5',
        '8',
        '15',
        '20') , 
    texto_comando: 'Se o dobro de um número é 20, qual é esse número?'
}


let questão8 = { 
    id: 8,
    nivel: 'Fácil',
    nome_exercicio: 'Equação',
    alternativas_corretas: '5',
    alternativas_incorretas: (
        '80',
        '50',
        '10',
        '20') , 
    texto_comando: "Se um retângulo tem 20 cm de comprimento e 100 cm2 de área, qual a medida de sua largura?"
}

let questão9 = { 
    id: 9,
    nivel: 'Fácil',
    nome_exercicio: 'Equação',
    alternativas_corretas: '15',
    alternativas_incorretas: (
        '14',
        '13',
        '12',
        '11') , 
    texto_comando: "Qual o número cujo dobro de seu antecessor, menos 3 é igual a 25?"
}

let questão10 = { 
    id: 10,
    nivel: 'Fácil',
    nome_exercicio: 'Equação',
    alternativas_corretas: '33',
    alternativas_incorretas: (
        '35',
        '31',
        '29',
        '27') , 
    texto_comando: "A soma de dois números ímpares consecutivos é 64. Qual o maior desses dois números?"
}

let questão11 = { 
    id: 11,
    nivel: 'Fácil',
    nome_exercicio: 'Equação',
    alternativas_corretas: '17',
    alternativas_incorretas: (
        '18',
        '16',
        '15',
        '14') , 
    texto_comando: "A soma de quatro números naturais consecutivos é 62. Qual o maior desses números."
}

let questão12 = { 
    id: 12,
    nivel: 'Médio',
    nome_exercicio: 'Equação',
    alternativas_corretas: '20 anos',
    alternativas_incorretas: (
        '28 anos',
        '26 anos',
        '24 anos',
        '22 anos') , 
    texto_comando: "Hoje, a idade de um pai é o quádruplo da idade do filho. Daqui a 10 anos, a idade do pai será o dobro da idade do filho. Qual é hoje a idade do pai?"
}

let fracoes = {
    id: 2,
    nome: "Frações"
}

let questão13 = { 
    id: 13,
    nivel: 'Fácil',
    nome_exercicio: 'Fracão',
    alternativas_corretas: '1/4',
    alternativas_incorretas: (
        '3/4',
        '7/12',
        '5/12',
        '1/3'), 
    texto_comando: "Alan, José e Paulo resolveram sair para comer uma pizza. A pizza foi dividida em 12 pedaços iguais. José comeu 4 pedaços, Paulo comeu 3 pedaços e Alan comeu 2 pedaços. A fração que representa a quantidade de pizza que sobrou é" 
}

let questão14 = { 
    id: 14,
    nivel: 'Médio',
    nome_exercicio: 'Fracão',
    alternativas_corretas: '360',
    alternativas_incorretas: (
        '300',
        '315',
        '330',
        '345'), 
    texto_comando: "Alan já leu 3/11 do segundo volume de Game of Thrones. Essa obra de George R.R. Martin tem 495 páginas. Quantas páginas ainda faltam para Alan terminar o livro?" 
}

let questão15 = { 
    id: 15,
    nivel: 'Médio',
    nome_exercicio: 'Fracão',
    alternativas_corretas: '4500 m2',
    alternativas_incorretas: (
        '4200 m2',
        '4800 m2',
        '5000 m2',
        '5300 m2'), 
    texto_comando: "Nelson e Nilson herdaram um terreno de maneira que 3/5 da área total ficou com Nelson e os 1800 m2 restantes ficaram com Nilson. Qual a área total do terreno?" 
}

let questão16 = { 
    id: 16,
    nivel: 'Médio',
    nome_exercicio: 'Fracão',
    alternativas_corretas: '400 mL',
    alternativas_incorretas: (
        '340 mL',
        '360 mL',
        '380 mL',
        '420 mL'), 
    texto_comando: "Luísa tomou 1/5 de um refrigerante de 1500 mL. Seu irmão, Maurício, tomou 2/3 do que havia sobrado. Qual a quantidade de refrigerante que ainda resta na garrafa?" 
}

let questão17 = { 
    id: 17,
    nivel: 'Médio',
    nome_exercicio: 'Fracão',
    alternativas_corretas: '200,00',
    alternativas_incorretas: (
        '240,00',
        '220,00',
        '180,00',
        '160,00'), 
    texto_comando: "Uma pessoa comprou uma televisão pagando 2/5 do valor de entrada e dividiu o restante em 6 prestações mensais iguais e sem juros. Se o valor pago de entrada foi de R$ 800,00, qual o valor de cada uma das demais prestações?" 
}

let questão18 = { 
    id: 18,
    nivel: 'Médio',
    nome_exercicio: 'Fracão',
    alternativas_corretas: '180',
    alternativas_incorretas: (
        '300',
        '240',
        '150',
        '120'), 
    texto_comando: "Marcos leu metade das páginas de um livro na segunda-feira; na terça-feira, leu a terça parte das páginas do livro; e, na quartafeira, terminou as últimas 30 páginas do livro. Quantas páginas tem o livro?" 
}

let questão19 = { 
    id: 19,
    nivel: 'Médio',
    nome_exercicio: 'Fracão',
    alternativas_corretas: '2/15',
    alternativas_incorretas: (
        '2/5',
        '3/5',
        '3/15',
        '7/15'), 
        texto_base: 'Jéssica comprou adubo para preparar a terra e plantar flores no jardim de sua casa nova, mas o adubo acabou antes que fosse possível preparar todo o jardim, por isso somente 3/5 do jardim recebeu adubo. As flores não nasceram em apenas 1/3 da parte do jardim que não foi adubado.',
    texto_comando: "Qual alternativa representa a fração do jardim na qual as flores não nasceram?" 
}

let questão20 = { 
    id: 20,
    nivel: 'Difícil',
    nome_exercicio: 'Fracão',
    alternativas_corretas: '1/6',
    alternativas_incorretas: (
        '1/12',
        '1/8',
        '1/5',
        '1/2'), 
    texto_base: 'Os gatos Gauss e Sakura estão dormindo no sofá. Gauss chegou antes e quando Sakura chegou, ela ocupou um quarto da superfície que havia sobrado do sofá. Os dois juntos ocupam exatamente a metade da superfície do sofá.',
    texto_comando: "Qual parte da superfície do sofá está ocupada por Sakura?" 
}

let numerosnaturais = {
    id: 3,
    nome: 'Números naturais'
}

let questão21 = { 
    id: 21,
    nivel: 'Fácil',
    nome_exercicio: 'Números naturais',
    alternativas_corretas: '29',
    alternativas_incorretas: (
        '21',
        '25',
        '27',
        '28'), 
    texto_comando: "Qual dos números a seguir é primo?" 
}

let questão22 = { 
    id: 22,
    nivel: 'Fácil',
    nome_exercicio: 'Números naturais',
    alternativas_corretas: '2, 3, 4 ou 6',
    alternativas_incorretas: (
        '2, 3 ou 4',
        '2, 3, 4 ou 5',
        '2, 3, 4, 6 ou 8',
        '2, 3, 4, 6, 8 ou 12'), 
    texto_base: 'Júlia comprou uma caixa com 24 bombons. Ela distribuiu todos os bombons entre suas amigas de forma que cada amiga recebeu pelo menos quatro bombons. Todas as amigas receberam a mesma quantidade de bombons.',
    texto_comando: "A quantidade de amigas que Júlia possui pode ser apenas" 
}

let questão23 = { 
    id: 23,
    nivel: 'Fácil',
    nome_exercicio: 'Números naturais',
    alternativas_corretas: 'Não, pois o resto da divisão de 78 por 4 é igual a 2.',
    alternativas_incorretas: (
        'Sim, é possível isso ser feito.',
        'Não, pois o resto da divisão de 78 por 4 é igual a 1.',
        'Não, pois o resto da divisão de 78 por 4 é igual a 3.',
        'Não, pois o resto da divisão de 78 por 4 é igual a 4.'), 
    texto_comando: "Uma lista possui 78 exercícios de Matemática. Quatro alunos decidem dividir igualmente a quantidade de exercícios. É possível que isso seja feito?" 
}

let questão24 = { 
    id: 24,
    nivel: 'Fácil',
    nome_exercicio: 'Números naturais',
    alternativas_corretas: '217 não é primo e 673 é primo.',
    alternativas_incorretas: (
        'ambos são números primos.',
        '217 é primo e 673 não é primo.',
        'nenhum dos dois números é primo.'),
    texto_comando: "Em relação aos números 217 e 673, podemos dizer que:" 
}

let questão25 = { 
    id: 25,
    nivel: 'Fácil',
    nome_exercicio: 'Números naturais',
    alternativas_corretas: '5750 m',
    alternativas_incorretas: (
        '2350 m',
        '3850 m',
        '4150 m',
        '6450 m'),
    texto_base: 'Um atleta, em treinamento para as olimpíadas, corre em uma pista circular de 250 m de comprimento. Em um determinado dia, este atleta correu uma quantidade inteira de voltas.',
    texto_comando: "Uma possível distância percorrida por ele neste dia é" 
}

let questão26 = { 
    id: 26,
    nivel: 'Fácil',
    nome_exercicio: 'Números naturais',
    alternativas_corretas: '17',
    alternativas_incorretas: (
        '14',
        '15',
        '16',
        '18'),
    texto_base: 'Um sapo salta sobre uma régua numerada em centímetros.Ele inicia no ponto zero e salta de 6 em 6 centímetros.' ,
    texto_comando: 'Entre 100 cm e 200 cm ele pisa em quantos números?' 
}

let questão27 = { 
    id: 27,
    nivel: 'Fácil',
    nome_exercicio: 'Números naturais',
    alternativas_corretas: '28',
    alternativas_incorretas: (
        '7',
        '12',
        '18',
        '30'),
    texto_base: 'Um número é chamado de perfeito quando é igual à soma de seus divisores próprios, ou seja, seus divisores excluindo o próprio número.' ,
    texto_comando: 'Qual dos números a seguir é um número perfeito?' 
}

let questão28 = { 
    id: 28,
    nivel: 'Fácil',
    nome_exercicio: 'Números naturais',
    alternativas_corretas: '2145',
    alternativas_incorretas: (
        '2288',
        '2250',
        '2179'),
    texto_comando: 'A partir do ano 2016, qual vai ser o primeiro ano divisível por 11 e por 13?' 
}

let questão29 = { 
    id: 29,
    nivel: 'Médio',
    nome_exercicio: 'Números naturais',
    alternativas_corretas: '20',
    alternativas_incorretas: (
        '2',
        '6',
        '41',
        '62'),
    texto_base: 'Numa reunião da comunidade do bairro, cada uma das 125 pessoas presentes recebeu um número diferente, a partir do número 1 até o 125. Em dado momento, foi feita uma lista das pessoas com número par e das pessoas com número múltiplo de 3, que deveriam participar de um projeto. Algumas pessoas reclamaram, dizendo que o seu nome aparecia duas vezes na lista.',
    texto_comando: 'Quantas pessoas apareceram duas vezes na lista?' 
}

let questão30 = { 
    id: 30,
    nivel: 'Médio',
    nome_exercicio: 'Números naturais',
    alternativas_corretas: '240 dias',
    alternativas_incorretas: (
        '220 dias',
        '120 dias',
        '250 dias',
        '180 dias'),
    texto_base: 'Três vendedores viajam a serviço para uma empresa. O primeiro viaja de 12 em 12 dias, o segundo de 16 em 16 dias e o terceiro de 20 em 20 dias.',
    texto_comando: 'Se todos viajarem hoje, calcule daqui quantos dias eles voltarão a viajar no mesmo dia' 
}

let questão31 = { 
    id: 31,
    nivel: 'Médio',
    nome_exercicio: 'Números naturais',
    alternativas_corretas: '12 vezes',
    alternativas_incorretas: (
        '15 vezes',
        '9 vezes',
        '6 vezes',
        '2 vezes'),
    texto_base: '(UDESC) Maria recebeu alta do hospital, mas deverá continuar o tratamento em casa por mais 30 dias completos. Para isso, ela deverá tomar o remédio A a cada 4 horas, o B a cada 5 horas e o C a cada 6 horas. Em casa, Maria iniciou o tratamento tomando o remédio A, o B e o C no mesmo horário. Ela atendeu rigorosamente às recomendações médicas quanto ao horário da ingestão dos medicamentos.',
    texto_comando: 'O número de vezes em que os três remédios foram ingeridos simultaneamente foi:' 
}

let questão32 = { 
    id: 32,
    nivel: 'Médio',
    nome_exercicio: 'Números naturais',
    alternativas_corretas: '2070',
    alternativas_incorretas: (
        '2072',
        '2060',
        '2075',
        '2065'),
    texto_base: '(UEPB) Com relação ao movimento dos cometas no universo, sabemos que muitos deles passam pelo planeta Terra em períodos de anos definidos. Os cometas A e B passam de 20 em 20 anos e 35 em 35 anos respectivamente, e suas últimas aparições simultâneas na Terra ocorreram em 1930.',
    texto_comando: 'A próxima passagem simultânea dos dois pela Terra ocorrerá no ano' 
}

let questão33 = { 
    id: 33,
    nivel: 'Médio',
    nome_exercicio: 'Números naturais',
    alternativas_corretas: '9',
    alternativas_incorretas: (
        '6',
        '12',
        '15',
        '18'),
    texto_base: '(UPE) Rodrigo estava observando o pisca-pisca do enfeite natalino de sua casa. Ele é composto por lâmpadas nas cores amarelo, azul, verde e vermelho. Rodrigo notou que lâmpadas amarelas acendem a cada 45 segundos, as lâmpadas verdes, a cada 60 segundos, as azuis, a cada 27 segundos, e as vermelhas só acendem quando as lâmpadas das outras cores estão acesas ao mesmo tempo.',
    texto_comando: 'De quantos em quantos minutos, as lâmpadas vermelhas acendem?' 
}

let operacoesbasicas = {
    id: 4,
    nome:'Operações básicas'
}

let razãoproporcaoregradetres = {
    id: 5,
    nome:'Razão, proporção e regra de três'
}

let sistemametrico = {
    id: 6,
    nome:'Sistema métrico'
}

let funcaoafim = {
    id: 7,
    nome:'Função afim'
}

let introduçãofunção = {
    id: 8,
    nome:'Introdução à função'
}

let funcaoquadratica = {
    id: 9,
    nome:'Função Quadrática'
}

async function sincronizar (){
    await conexao.sync({force:true});
    await inserirExercicio(questão8);
    await inserirExercicio(questão9);
    await inserirExercicio(questão10);
    await inserirExercicio(questão11);
    await inserirExercicio(questão12);
    await inserirExercicio(questão13);
    await inserirExercicio(questão14);
    await inserirExercicio(questão15);
    await inserirExercicio(questão16);
    await inserirExercicio(questão17);
    await inserirExercicio(questão18);
    await inserirExercicio(questão19);
    await inserirExercicio(questão20);
    await inserirExercicio(questão21);
    await inserirExercicio(questão22);
    await inserirExercicio(questão23);
    await inserirExercicio(questão24);
    await inserirExercicio(questão25);
    await inserirExercicio(questão26);
    await inserirExercicio(questão27);
    await inserirExercicio(questão28);
    await inserirExercicio(questão29);
    await inserirExercicio(questão30);
    await inserirExercicio(questão31);
    await inserirExercicio(questão32);
    await inserirExercicio(questão33);
    await inserirAssunto(fracoes);
    await inserirAssunto(funcaoafim);
    await inserirAssunto(funcaoquadratica);
    await inserirAssunto(numerosnaturais);
    await inserirAssunto(sistemametrico);
    await inserirAssunto(operacoesbasicas);
    await inserirAssunto(razãoproporcaoregradetres);
    await inserirAssunto(equacaodoprimeirograu);
    await inserirDisciplina(mat);
}

async function inserirAssunto (objeto){
    let r = await Assunto.create(objeto);
    console.log(r);
}

async function inserirDisciplina (objeto){
    let r = await Disciplina.create(objeto);
    console.log(r);
}

async function inserirExercicio (objeto){
    let r = await Exercicio.create(objeto);
    console.log(r);
}

async function consultar (){
    let r = await Pizza.findAll();
    console.log(r);
}