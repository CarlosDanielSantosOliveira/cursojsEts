/*
Tipos genéricos do typescript

Record: Representa um objeto onde você fala qual que é o tipo da chave e o tipo dos valores
*/

import { Pessoa } from "../Generics com classes(estrutura de dados pilha)";

const objeto1: Record<string, string | number> = {
    nome: 'Carlos',
    sobenoe: 'Daniel',
    idade: 23,
};

type PessoaProtocol = {
    nome?: string;
    sobrenome?: string;
    idade?: number;
};

//Required: Tranforma tudo o que é opcional. em não opcional

type PessoaRequired = Required<PessoaProtocol>;

const objeto2: PessoaProtocol = {
    nome: 'Carlos',
    sobrenome: 'Daniel',
    idade: 23,
};

//Partial: Tranforma tudo o que é requerido, em opcional

type PessoaPartial= Partial<PessoaRequired>;

const objeto3: PessoaPartial = {
    nome: 'Carlos',
    sobrenome: 'Daniel',
    idade: 23,
};

//Readonly: Não pode ser alterado

type PessoaReadonly= Readonly<PessoaRequired>;

const objeto4: PessoaReadonly = {
    nome: 'Carlos',
    sobrenome: 'Daniel',
    idade: 23,
};

//Pick: Permite que você escolha as coisas de dentro de um objeto que você quer utilizar

type PessoaPick= Pick<PessoaRequired, 'nome' | 'sobrenome'>;

//Extract e Exclude
type ABC = 'A' | 'B' | 'C';

type CDE = 'C' | 'D' | 'E';

type TipoExclude = Exclude<ABC, CDE>; //Computa todos os dados que estão em ABC e que não estão em CDE;
type TipoExtract = Extract<ABC, CDE>; //Computa todos os dados que estão em ABC e que podem ser atribuidos para CDE

type AccountMongo = {
    _id: string;
    nome: string;
    idade: number;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
    id: string;
};

const accountMongo: AccountMongo = {
    _id: 'Ddsjkadaksdladad',
    nome: 'Daniel',
    idade: 23,
};

function MapAccount(accountMongo: AccountMongo): AccountApi {
    const { _id, ...accountData } = accountMongo;
    return { ...accountData, id: _id };
}

const accountApi = MapAccount(accountMongo);
console.log("API")
console.log(accountApi)

export default 1;