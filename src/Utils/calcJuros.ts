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
}: CalcJurosParams): string => {
  const total = price * (1 + interestRate);
  const installment = total / installments;
  return installment.toFixed(2).replace('.', ',');
};
