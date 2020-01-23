type andamento = 'Alicerce' | 'Levantando Parede' | 'Laje' | 'Reboco' | 'Pintura' | 'Finalizada';
type vendedor = 'Bruno Neves' | 'Rafael Bonfim' | 'Érica Lima' | 'João Bonfim';

export interface Obra {
    idObra: number;
    clienteObra: string;
    enderecoObra: string;
    foneObra: string;
    pedreiroObra: string;
    eletricistaObra: string;
    vendedorObra: vendedor;
    dataCadObra: Date;
    andamentoObra: andamento;
    obsObra: string;
}
