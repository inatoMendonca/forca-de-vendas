type sexo = 'MASCULINO' | 'FEMININO';
export interface Cliente {
    idCliente: number;
    nomeCliente: string;
    foneCliente: string;
    sexoCliente: sexo;
    obsCliente: string;
}
