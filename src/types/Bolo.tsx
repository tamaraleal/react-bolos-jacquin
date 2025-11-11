export interface Bolos { // interface é um tipo
    nome: string;
    descricao: string;
    id: string | undefined;
    categorias: string[];
    imagens: string[];
    preco: number;
    peso: number | null;
}