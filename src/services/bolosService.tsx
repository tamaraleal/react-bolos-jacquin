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