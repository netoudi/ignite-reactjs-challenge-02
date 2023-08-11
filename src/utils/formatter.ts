export const priceFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export function centsFormatter(cents: number): string {
  return priceFormatter.format(cents / 100);
}
