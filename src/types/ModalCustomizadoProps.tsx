export interface ModalCustomizadoProps {
    mostrarModalQuando: boolean;
    aoCancelar: () => void; // funcao vazia
    titulo: string;
    corpo: string | React.ReactNode; // propriedade propria do react
    textoBotaoConfimacao?: string; // ? = pode ou nao ser fornecido (opicional)
    textoBotaoCancelamento?: string;
    aoConfirmar?: () => void;
    customizarBotoes?: boolean;
    exibirConteudoCentralizado: boolean; // quando nao tem o ? significa que é obrigatoria 
}