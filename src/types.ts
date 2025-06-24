export interface Field {
  label: string;
  type: 'text' | 'number' | 'checkbox' | 'select' | 'textarea' | 'date';
  name: string;
  required?: boolean;
  options?: string[];
}

export interface Schema {
  title: string;
  fields: Field[];
}

export interface FormData {
  [key: string]: string | boolean;
}

export interface Errors {
  [key: string]: string;
}
