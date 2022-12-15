import OperationsItem from "./OperationsItem";
import Data from '../assets/depenses.json';
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { counterState } from "../atoms/counterState";

const Operations = () => {
  !localStorage.getItem('depenses') && localStorage.setItem('depenses', JSON.stringify(Data));
  const [depenses, setDepenses] = useState(JSON.parse(localStorage.depenses));
  const [newCounter, setNewCounter] = useRecoilState(counterState);
  
  useEffect(
    () => {
      setDepenses(JSON.parse(localStorage.depenses));
    },
    [newCounter]
  );

  return (
    <section className="py-4 border-bottom text-center">
      <h2>Détail des opérations</h2>
      <table className="table table-striped text-start">
        <thead>
          <tr>
            <th style={{width: "50px"}}>id</th>
            <th style={{width: "200px"}}>nom</th>
            <th style={{width: "100px"}}>montant</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {
            depenses?.elements.map((depense, i) => <OperationsItem key={i} data={depense} index={i}/>)
          }
        </tbody>
      </table>
    </section>
  );
}
 
export default Operations;