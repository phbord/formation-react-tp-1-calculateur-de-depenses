import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { creditState } from "../atoms/creditState";
import { incomeState } from "../atoms/incomeState";
import { counterState } from "../atoms/counterState";

const SynthesisItem = (props) => {
  const { className, title, isIncome } = props;
  const [income, setIncome] = useRecoilState(incomeState);
  const [credit, setcredit] = useRecoilState(creditState);
  const [newCounter, setNewCounter] = useRecoilState(counterState);
  const [depenses, setDepenses] = useState(JSON.parse(localStorage.depenses));
  
  useEffect(
    () => {
      isIncome ? getIncome() : getCredit();
      console.log( 'useEffect --=> ', isIncome );
    },
    [newCounter, income, credit]
  );

  const getIncome = () => {
    let calculation = 0;

    Array.from(depenses.elements).map(depense => {
      calculation += depense.montant > 0 ? Number(depense.montant) : 0;
    });
    setIncome(calculation);
  };

  const getCredit = () => {
    let calculation = 0;

    Array.from(depenses.elements).map(depense => {
      calculation += depense.montant < 0 ? Number(depense.montant) : 0;
    });
    setcredit(calculation);
  };

  return (
    <div className={className}>
      <h3>{title}</h3>
      <div>{isIncome ? income : credit}</div>
    </div>
  );
}
 
export default SynthesisItem;