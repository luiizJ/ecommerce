export type CalcJurosParams = {
  price: number;
  installments?: number;
  interestRate?: number;
};

/**
 * Retorna o valor de cada parcela (com juros) formatado no padrão BR.
 */
export const calcJuros = ({
  price,
  installments = 10,
  interestRate = 0.3,
}: CalcJurosParams): number => {
  const total = price * (1 + interestRate);
  const installment = total / installments;
  return parseFloat(installment.toFixed(2));
};

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(price);
};
