import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { counterState } from "../atoms/counterState";
import { indexFormState } from "../atoms/indexFormState";
import { elementFormState } from "../atoms/elementFormState";

const OperationsItem = ({data, index}) => {
  const [newCounter, setNewCounter] = useRecoilState(counterState);
  const [depenses, setDepenses] = useState(JSON.parse(localStorage.depenses));
  const [indexForm, setIndexForm] = useRecoilState(indexFormState);
  const [elementForm, setElementForm] = useRecoilState(elementFormState);

  useEffect(
    () => {
      localStorage.setItem('depenses', JSON.stringify(depenses));
    },
    [depenses]
  );

  const handleClickModify = (e) => {
    e.preventDefault();

    const index = Array.from(depenses.elements).findIndex(el => el.id === data.id);

    setElementForm(index);
    setNewCounter(newCounter + 1);
    setIndexForm(1);
  };

  const handleClickDelete = (e) => {
    e.preventDefault();

    setDepenses({ "elements":  Array.from(depenses.elements).filter((depense, i) => i !== index) });
    localStorage.removeItem('depenses');
    localStorage.setItem('depenses', JSON.stringify(depenses));

    setNewCounter(newCounter + 1);
    setIndexForm(0);
    setElementForm(-1);
  };

  return (
    <tr>
      <td>{data.id}</td>
      <td>{data.nom}</td>
      <td className="text-end">{data.montant}</td>
      <td className="text-end">
        <button type="button" className="btn btn-primary me-2" onClick={(e) => handleClickModify(e)}>Modifier</button>
        <button type="button" className="btn btn-dark" onClick={(e) => handleClickDelete(e)}>Supprimer</button>
      </td>
    </tr>
  );
}
 
export default OperationsItem;