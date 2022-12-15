import { atom } from "recoil";

export const msgFormState = atom({
  key: 'msgFormState',
  default: ['Ajouter une nouvelle opération', 'Modifier une opération']
});