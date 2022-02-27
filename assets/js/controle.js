import { Pessoa } from './pessoa.js'
import { DataBase} from './dataBase.js'


console.log('ola')

class Cadastramento {

    static cadastro(pessoa) {
        console.log(pessoa)
        if(DataBase.length > 0){
            const pessoaVerificada = DataBase.some((cadastro) => cadastro.email == pessoa.email)
            console.log(pessoaVerificada)
            if(pessoaVerificada === false){
                const novaPessoa = new Pessoa(pessoa)
                DataBase.push(novaPessoa)

            }else {
                return "email já cadastrado"
            }

        } else{
            const novaPessoa = new Pessoa(pessoa)
            DataBase.push(novaPessoa)
            console.log(novaPessoa)
            console.log(DataBase)
            
            return 'pessoa cadastrada com sucesso'
            
        }
    
        
    }
    
}

export { Cadastramento }

