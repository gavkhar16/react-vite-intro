import AppHeader from "../Header/AppHeader";
import { AppButton } from "../../components/AppButton/AppButton";
import "./Hero-section.css";



export default function HeroSection() {
  return (
    <div>
      <AppHeader/>
      <section className="hero-section">
    <div className="paragraph">
      
      <div className="main">
        <h1>Lorem Ipsum is sim dummy text of thats</h1>
      </div>
      <h4>Lorem Ipsum is simply dummy text of the printing</h4>
    <AppButton buttonText="Lorem Ipsum Is Sim"/>
    </div>
  </section></div>
  );
}
