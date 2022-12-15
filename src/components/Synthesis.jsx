import SynthesisItem from "./SynthesisItem";

const Synthesis = () => {
  return (
    <section className="py-4 border-bottom text-center">
      <h2>Synthèse</h2>
      <div className="row row-cols-1 row-cols-md-2">
        <SynthesisItem className="col" title="Revenus" isIncome/>
        <SynthesisItem className="col" title="Dépenses"/>
      </div>
    </section>
  );
}
 
export default Synthesis;