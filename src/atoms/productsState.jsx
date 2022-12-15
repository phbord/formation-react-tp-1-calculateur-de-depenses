import { atom } from "recoil";

export const productsState = atom({
  key: 'productsState',
  default: {
    "elements": [
      { "id": 1, "nom": "produit 1", "montant": 100 },
      { "id": 2, "nom": "produit 2", "montant": -50 }
    ]
  }
});