import './Produtos.css';
import whatsapp from '../../assets/whatsapp.png';
import type { Bolos } from '../../types/Bolo';
import { getBolos } from '../../services/bolosService';
import { useEffect, useState } from 'react';
import CardProduto from '../../components/CardProduto/CardProduto';
import Carrossel from '../../components/Carrossel/Carrossel';
import Header from '../../components/Header/Header';
import { useLocation } from 'react-router-dom';


export default function Produtos() {
    const [Bolos, setBolos] = useState<Bolos[]>([]); // quando houver uma variação (coisas adicionadas no site, como cadastro de um produto) o state automaticamente vai atualizar a página
    const location = useLocation();

    const parametrosPesquisados = new URLSearchParams(location.search);
    const termo_pesquisado = parametrosPesquisados.get('query');

    const fetchBolos = async () => {
        try {
            const dados = await getBolos(); // o que é um await? await é aguarde, ele serve para ler os dados (CRUD) // PESQUISAR FUNÇÕES ASSÍNCRONAS
            if (termo_pesquisado) {
                const dados_filtrados = dados.filter(b =>
                    b.nome.toLowerCase().includes(termo_pesquisado.toLowerCase()) ||  //toLowerCase (pega as letras do nome e transforma todas em minusculos) includes ()
                    b.descricao.toLowerCase().includes(termo_pesquisado.toLowerCase()) ||
                    b.categorias.some(cat => cat.toLowerCase().includes(termo_pesquisado.toLowerCase()))
                )
                setBolos(dados_filtrados)
            } else {
                console.log("Dados retornados da API: ", dados);
                setBolos(dados);
            }

        } catch (error) {
            console.error("Erro ao executar a função GetBolos: ", error);
        }
    }

    useEffect(() => { //roda sempre que a página é carregada
        fetchBolos();
        console.log("Termo pesquisado: ", termo_pesquisado)
    }, [termo_pesquisado])


    return ( // O return só aceita um elemento
        <>
            <Header />
            <main>
                <Carrossel />
                <section className="container_produtos">
                    <h1 className="acessivel">produtos de chocolate</h1>
                    <div className="titulo">
                        <span>
                            {
                                termo_pesquisado ? `Resultados para: ${termo_pesquisado}` :
                            "Bolos" 
                            }
                        </span>
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
        </>
    )
}