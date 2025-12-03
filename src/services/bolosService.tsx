import axios from "axios";
import type { Bolos } from "../types/Bolo";

export const getBolos = async (): Promise<Bolos[]> => {
    try {
        const resposta = await axios.get("http://localhost:3000/bolos");
        return resposta.data;
    } catch (error) {
        console.error("Erro ao buscar os dados: ", error);
        throw error;
    }
}

export const deleteBolo = async (idBolo: string): Promise<void> => {
    try {
        await axios.delete(`http://localhost:3000/bolos/${idBolo}`);
    } catch (error) {
        console.error("Erro ao deletar o bolo: ", error);
        throw error;
    }
}

export const enviarFotoParaAPI = async (file: File): Promise<string | undefined> => {
    const formData = new FormData();
    formData.append("file", file) // adicione ao final o arquivo que você esta recebendo

    try {
        const res = await axios.post("http://localhost:3000/upload", formData, { headers: { "Content-Type": "multipart/form-data" } }); // post: a operação responsavel por criar algo (CRUD)
        return res.data.filename;
    } catch (error) {
        console.error("Erro no Upload da imagem: ", error);
        return undefined;
    }
}

export const postBolo = async (bolo: Bolos): Promise<void> => {
    try {
        await axios.post("http://localhost:3000/bolos", bolo);
    } catch (error) {
        console.error("Erro ao cadastrar o bolo", error);
        throw error; // lançar o erro de volta para a pessoa que o enviou
    }
}