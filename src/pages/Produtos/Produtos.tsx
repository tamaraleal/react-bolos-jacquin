import './Produtos.css';
import choc_belga from '../../assets/imgs/choc-belga.png';
import choc_ninho from '../../assets/imgs/choc-ninho.png';
import choc_cenoura from '../../assets/imgs/cenoura-choc.png';
import choc_ninho_morango from '../../assets/imgs/choc-ninho-morango.png';
import choc_pistache from '../../assets/imgs/choc-pistache.png';
import choc_oreo from '../../assets/imgs/choc-oreo.png';
import whatsapp from '../../assets/whatsapp.png';
import type { Bolos } from '../../types/Bolo';
import { getBolos } from '../../services/bolosService';
import { useEffect, useState } from 'react';
import CardProduto from '../../components/CardProduto/CardProduto';
import Carrossel from '../../components/Carrossel/Carrossel';


export default function Produtos() {
    const [Bolos, setBolos] = useState<Bolos[]>([]); // quando houver uma variação (coisas adicionadas no site, como cadastro de um produto) o state automaticamente vai atualizar a página

    const fetchBolos = async () => {
        try {
            const dados = await getBolos(); // o que é um await? await é aguarde, ele serve para ler os dados (CRUD) // PESQUISAR FUNÇÕES ASSÍNCRONAS
            console.log("Dados retornados da API: ", dados);
            setBolos(dados);
        } catch (error) {
            console.error("Erro ao executar a função GetBolos: ", error);
        }
    }

    useEffect(() => {
        fetchBolos();
    }, [])


    return (
        <main>
            <Carrossel />
            <section className="container_produtos">
                <h1 className="acessivel">produtos de chocolate</h1>
                <div className="titulo">
                    <span>Chocolate</span>
                    <hr />
                </div>

                <section className="cards">
                    {
                        Bolos.map((b: Bolos) => (
                            <CardProduto nome={b.nome}
                                descricao={b.descricao}
                                preco={b.preco}
                                imagem={b.imagens[0] ?? ""}
                                peso={b.peso}
                            />
                        ))
                    }

                </section>
            </section>

            <a className="whatsapp" href="https://wa.me/5511999999999?text=Olá%20,%20gostaria%20de%20mais%20informações."
                target="_blank">
                <img src={whatsapp} alt="icone do whatsapp" />
            </a>
        </main>
    )
}