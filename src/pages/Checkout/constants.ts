import { z } from 'zod';

export const checkoutFormSchema = z.object({
  zipcode: z.string(),
  street: z.string().min(1, 'Campo obrigatório'),
  number: z.string().min(1, 'Campo obrigatório'),
  complement: z.string().optional(),
  district: z.string().min(1, 'Campo obrigatório'),
  city: z.string().min(1, 'Campo obrigatório'),
  state: z.string().min(2).max(2),
  payment: z.enum(['credit', 'debit', 'money']),
});

export type CheckoutFormInputs = z.infer<typeof checkoutFormSchema>;
