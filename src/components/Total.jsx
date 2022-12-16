import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { creditState } from "../atoms/creditState";
import { incomeState } from "../atoms/incomeState";
import { counterState } from "../atoms/counterState";
import { totalState } from "../atoms/totalState";

const Total = () => {
  const [income, setIncome] = useRecoilState(incomeState);
  const [credit, setcredit] = useRecoilState(creditState);
  const [total, setTotal] = useRecoilState(totalState);
  const [newCounter, setNewCounter] = useRecoilState(counterState);
  
  useEffect(
    () => {
      setTotal(income + credit);
    },
    [newCounter, income, credit]
  );

  return (
    <section className="py-4 border-bottom text-center">
      <h1>Total</h1>
      <div>{total}</div>
    </section>
  );
}
 
export default Total;