import type { CardProdutoProps } from '../../types/CardProdutoProps'
import bolo_default from '../../assets/imgs/bolo-default.png'
import './CardProduto.css'
import { formatosServices } from '../../services/formatosServices'

export default function CardProduto({ nome, descricao, preco, imagem, id, peso }: CardProdutoProps) {

    return (
        <div key={id} className="card_produto">
            <img src={(imagem.length > 0) ? `http://localhost:3000/static/${imagem}` : bolo_default} alt="Uma fatia de bolo de chocolate belga" />
            <h2>{nome}</h2>
            <p>{(descricao.length > 0) ? descricao : "Descrição não cadastrada"}</p>
            <div>
                <span>{formatosServices.PrecoBR(preco)}</span> <br />
                <span>{(peso != null) ? formatosServices.PesoEmKg(peso) : "qtde não informada"}</span>
            </div>
        </div>
    )
}
