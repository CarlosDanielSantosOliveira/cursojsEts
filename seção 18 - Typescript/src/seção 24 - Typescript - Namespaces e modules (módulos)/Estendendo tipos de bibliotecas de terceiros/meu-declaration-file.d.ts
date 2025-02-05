//Tudo que houver dentro desse arquivo, tem que ser criado de forma global
declare namespace _ {
    declare interface LoDashStatic {
        mul(array: number[]): number;
    }
}

declare namespace NodeJS {
    interface Global {
        MINHAGLOBAL: string;
    }
}