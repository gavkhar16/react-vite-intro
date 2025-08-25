import "./Section2.css";
import { AppButton } from "../../components/AppButton/AppButton";

export default function Section2() {
  return (
    <section className="section-2" id="Contrary">
      <div className="paragraph">
        <h2 className="first">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h2>
        <AppButton buttonText="Lorem Ipsum is simply" />
      </div>
    </section>
  );
}
