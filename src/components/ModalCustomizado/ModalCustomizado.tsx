import { Modal } from 'react-bootstrap'
import './ModalCustomizado.css'
import type { ModalCustomizadoProps } from '../../types/ModalCustomizadoProps'

export default function ModalCustomizado({ mostrarModalQuando, aoCancelar, exibirConteudoCentralizado, titulo, corpo, customizarBotoes, textoBotaoCancelamento, textoBotaoConfimacao, aoConfirmar }: ModalCustomizadoProps) {
    return (
        <Modal
            style={{ fontFamily: "Bellota, system-ui" }}
            show={mostrarModalQuando} // quando ele vai ser exibido
            onHide={aoCancelar} // quando ele se esconder
            centered={exibirConteudoCentralizado} // centered = centralizar
        >
            <Modal.Header>
                <Modal.Title>{titulo}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{corpo}</Modal.Body>
            <Modal.Footer>
                {
                    customizarBotoes && (
                        <button onClick={aoCancelar} className='botaoModalCancelar'>
                            {textoBotaoCancelamento}
                        </button>
                    )
                }
                <button onClick={customizarBotoes ? aoConfirmar : aoCancelar} className='botaoSubmitModal'>
                    {customizarBotoes ? textoBotaoConfimacao : "OK"}
                </button>
            </Modal.Footer>
        </Modal>
    )
}
