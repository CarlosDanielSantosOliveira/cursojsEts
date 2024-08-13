const objetoA: {
    readonly chaveA: string,
    chaveB: string,
    chaveC?: string;
    [key: string]: any; //Usamos esse codigo quando queremos adicionar mais atributos para este objeto depois.
} = {
    chaveA: 'Valor A',
    chaveB: 'Valor B',
};

objetoA.chaveA = 'Outro Valor';
objetoA.chaveC = 'Nova Chave';
objetoA.chaveD = 'Nova chave';