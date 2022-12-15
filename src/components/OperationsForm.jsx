import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { counterState } from "../atoms/counterState";
import { indexFormState } from "../atoms/indexFormState";
import { msgFormState } from "../atoms/msgFormState";
import { elementFormState } from "../atoms/elementFormState";

const OperationsForm = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const [depenses, setDepenses] = useState(JSON.parse(localStorage.depenses));
  const [newCounter, setNewCounter] = useRecoilState(counterState);
  const [msgForm, setMsgForm] = useRecoilState(msgFormState);
  const [indexForm, setIndexForm] = useRecoilState(indexFormState);
  const [elementForm, setElementForm] = useRecoilState(elementFormState);
  const inputNameEl = useRef(null);
  const inputAmountEl = useRef(null);

  useEffect(
    () => {
      setDepenses(JSON.parse(localStorage.depenses));

      if (elementForm !== -1) {
        setName(depenses.elements[elementForm].nom);
        setAmount(depenses.elements[elementForm].montant);
      }
    },
    [newCounter]
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    let newElement = [];

    if (elementForm === -1) {
      // ADD element
      newElement = depenses.elements.push({ "id": depenses.elements.length + 1, "nom": name, "montant": amount });
      console.log( 'ADD newElement => ', newElement );
    }
    else {
      // MODIFY element
      const modifiedData = {
        "id": depenses.elements[elementForm].id, 
        "nom": inputNameEl.current.value, 
        "montant": inputAmountEl.current.value
      };
      depenses.elements.map((depense, i) => {
        elementForm === i ? newElement.push(modifiedData) : newElement.push(depense);
      });

      console.log( 'MODIFY newElement => ', newElement );
    }
    
    setDepenses(newElement);
    localStorage.removeItem('depenses');
    localStorage.setItem('depenses', JSON.stringify(depenses));

    setName('');
    setAmount(0);
    setNewCounter(newCounter + 1);
    setIndexForm(0);
    setElementForm(-1);
  };

  return (
    <section className="py-4 text-start">
      <h2>
        {msgForm[indexForm]}
      </h2>
      <form onSubmit={(e) => handleSubmit(e)} 
            className="needs-validation" 
            noValidate>
        {/* INPUT NAME */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">nom</label>
          <input type="text" name="name" id="name" 
                  className="form-control" 
                  ref={inputNameEl}
                  value={name} 
                  onChange={(e) => setName(e.target.value)} />
        </div>
        {/* INPUT AMOUNT */}
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">montant</label>
          <input type="number" name="amount" id="amount" 
                  className="form-control" 
                  ref={inputAmountEl}
                  value={amount} 
                  onChange={(e) => setAmount(e.target.value)} />
        </div>
        {/* SUBMIT BUTTON */}
        <div className="text-end">
          <button type="submit" 
                  className="btn btn-success">Envoyer</button>
        </div>
      </form>
    </section>
  );
}
 
export default OperationsForm;