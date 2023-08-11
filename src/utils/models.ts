export interface Coffee {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
  tags: string[];
}

export interface Order {
  zipcode: string;
  street: string;
  number: string;
  complement: string;
  district: string;
  city: string;
  state: string;
  payment: 'credit' | 'debit' | 'money';
}
