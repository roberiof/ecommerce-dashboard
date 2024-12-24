import { z } from "zod";

// Obtém a data atual
const hoje = new Date();
hoje.setHours(0, 0, 0, 0); // Zera a hora para comparar apenas com a data

export default z.string({ required_error: "Insira uma data" }).refine(
  (valor) => {
    // Verifica se a string segue o formato 99/99/9999
    const regexData = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!regexData.test(valor)) return false;

    // Extrai o dia, mês e ano
    const [dia, mes, ano] = valor.split("/").map(Number);

    // Verifica se o mês é válido (entre 1 e 12)
    if (mes < 1 || mes > 12) return false;

    // Verifica se o ano está no intervalo de 1900 até o ano atual
    if (ano < 1900 || ano > hoje.getFullYear()) return false;

    // Array com o número máximo de dias para cada mês
    const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Verifica se é um ano bissexto (para fevereiro)
    const ehAnoBissexto = (ano: number) =>
      (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;

    // Se for fevereiro e ano bissexto, ajusta o número de dias
    if (ehAnoBissexto(ano)) diasPorMes[1] = 29;

    // Verifica se o dia é válido para o mês informado
    if (dia < 1 || dia > diasPorMes[mes - 1]) return false;

    // Compara a data fornecida com a data de hoje
    const dataFornecida = new Date(ano, mes - 1, dia);
    return dataFornecida >= hoje;
  },
  {
    message: `Insira uma data válida a partir de hoje`
  }
);
