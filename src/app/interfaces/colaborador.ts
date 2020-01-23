type funcao = 'Pedreiro' | 'Eletricista' | 'Vendedor';
export interface Colaborador {
    idColaborador: number;
    nomeColaborador: string;
    foneColaborador: string;
    funcaoColaborador: funcao;
    obsColaborador: string;
}

