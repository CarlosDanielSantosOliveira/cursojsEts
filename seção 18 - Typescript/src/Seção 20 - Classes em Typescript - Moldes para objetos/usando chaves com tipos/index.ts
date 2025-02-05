type Veiculo = {
    marca: string;
    ano: number;
}

type Car = {
    brand: Veiculo['marca'];
    yeaR: Veiculo['ano'];
    name: string;
};

const carro: Car = {
    brand: 'Ford',
    year: '2024',
    name: 'Nome',
}

console.log(carro);