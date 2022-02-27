
import { Pessoa } from './pessoa.js'
import { DataBase} from './dataBase.js'

import { Cadastramento} from './controle.js'

// import { Aside } from './aside.js'

const nando = new Pessoa('fernando', 'lacerda', '23041996', 'anjosdelacerda@gmail.com', '(11)39214441', '(11)999989999', 'aluno')
const fernando = new Pessoa({ nome: 'fernando', sobrenome: 'lacerda', datanascimento: '23041996', email: 'anjosdelacerda@gmail.com', contato: '1139214441', telefone: '11999989999', cargo: 'aluno' })



// console.log(fernando.sobrenome)


//modelar um objeto do tipo pessoa
//passar para o objeto os mesmos parâmetros dos labels na classe criada
//criar um evento no formulário
//dar um default no evento do formulário para evitar a atualização da página
//usar o momento que o formulário tentar fazer uma atualização pelo btn para startar uma função
//salvar as informações dos labels em um novo array no data base, igual da atividade hortifruti
//criar uma função que cria lis no aside apenas com as informações desejadas
//fazer um loop no array do database para isso
//a função deve recriar o aside toda vez que for atualizado pelo start da função

const lista = document.getElementById("lista-de-alunos")

const arrayDoFormulario = document.getElementById('formulario')
arrayDoFormulario.addEventListener('submit', pushValueDataBase)



// const igualCriarLista = 
function criarLista(listaGerada) {
    lista.innerHTML = ''

    // if(listaGerada.email === )
    listaGerada.forEach((pessoaCadastrada) => {
        const li = document.createElement('li')
        const nome = document.createElement('p')
        const sobrenome = document.createElement('p')
        const email = document.createElement('p')
        const cargo = document.createElement('p')

        nome.innerText = pessoaCadastrada.nome
        sobrenome.innerText = pessoaCadastrada.sobrenome
        email.innerText = pessoaCadastrada.email
        cargo.innerText = pessoaCadastrada.cargo

        li.appendChild(nome)
        li.appendChild(sobrenome)
        li.appendChild(email)
        li.appendChild(cargo)
        lista.appendChild(li)

    })

}



function pushValueDataBase(event) {
    event.preventDefault()
    const objetoCadastro = {}
    for (let i = 0; i < arrayDoFormulario.length; i++) {

        objetoCadastro[arrayDoFormulario[i].name] = arrayDoFormulario[i].value
        // console.log(arrayDoFormulario[i].value)
    }
    // console.log(objetoCadastro)
    Cadastramento.cadastro(objetoCadastro)
    criarLista(DataBase)
    


   
}


const listaAside = document.getElementById("lista-de-alunos")
console.log(listaAside)
const botaoPesquisa = document.getElementById("btnPesquisa")
console.log(botaoPesquisa)
const cargoSelecionado = document.getElementById("cargoOption")
console.log(cargoSelecionado)
botaoPesquisa.addEventListener('click', montaAside)

function montaAside(arr){


    console.log(cargoSelecionado.value)
    if(cargoSelecionado.value == 'Instrutor'){
        const arrayInstrutor = DataBase.filter((index) => index.cargo == 'Instrutor')
        criarLista(arrayInstrutor)
    } else if (cargoSelecionado.value == 'Facilitador'){
        const arrayFacilitador = DataBase.filter((index) => index.cargo == 'Facilitador')
        criarLista(arrayFacilitador)
    } else if(cargoSelecionado.value == 'Aluno'){
        const arrayAluno = DataBase.filter((index) => index.cargo == 'Aluno' )
        criarLista(arrayAluno)
    } else {
        criarLista(DataBase)
    }

}





