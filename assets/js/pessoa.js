
import { DataBase } from './dataBase.js'
// import { Aside } from './aside.js'
// import { Cadastramento } from './controle.js'


const Pessoa = class Pessoa {

    constructor({ nome, sobrenome, datanascimento, email, contato, telefone, cargo }) {
        this._nome = nome,
        this._sobrenome = sobrenome,
        this._datanascimento = datanascimento,
        this._email = email,
        this._contato = contato,
        this._telefone = telefone;
        this._cargo = cargo
        this.id = Pessoa.gerarId()
    }

    get nome() {
        return this._nome
    }

    set nome(novoNome) {
        this._nome = novoNome
    }

    get sobrenome() {
        return this._sobrenome
    }

    set sobrenome(novoSobrenome) {
        this._sobrenome = novoSobrenome
    }

    get email() {
        return this._email
    }

    set email(novoEmail) {
        this._email = novoEmail
    }

    get datanascimento() {
        return this._datanascimento
    }

    set datanascimento(novaDatanascimento) {
        this._datanascimento = novaDatanascimento
    }

    get contato() {
        return this._contato
    }

    set contato(novoContato) {
        this._contato = novoContato
    }

    get contato() {
        return this._contato
    }

    set contato(novoContato) {
        this._contato = novoContato
    }

    get cargo() {
        return this._cargo
    }

    set cargo(novoCargo) {
        this._cargo = novoCargo
    }

    static gerarId() {

        let maxId = 0
        DataBase.forEach((clientes) => {
            if (clientes.id > maxId) {
                maxId = clientes.id
            }
        })

        return maxId + 1
    }



}

export { Pessoa }


