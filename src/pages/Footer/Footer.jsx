import "./Footer.css";
import { AppButton } from "../../components/AppButton/AppButton";
import { useState } from "react";
import { AppInput } from "../../components/AppInput/AppInput";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError("⚠️ Заполните поле email");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("⚠️ Введите корректный email");
    } else {
      setError("");
      console.log("✅ Отправлен email:", email);
      
    }
  };

  return (
    <footer className="footer">
      <div className="paragraph">
        <div className="footer-top">
          <div className="logo-and-nav">
            <div className="logo">
              <img src="./photo/footer.png" alt="footerlogo" />
            </div>
            <ul className="nav-links">
              <li><a href="Lorem">Lorem</a></li>
              <li><a href="Contrary">Contrary To A</a></li>
              <li><a href="Randomised">Randomised</a></li>
              <li><a href="Passage">Passage</a></li>
              <li><a href="Necessary">Necessary</a></li>
            </ul>
          </div>

          <div className="subscribe">
            <h4>Lorem Ipsum is simply dummy text of the printing and type</h4>
            
            <form className="input-group" onSubmit={handleSubmit}>
              <AppInput InputType='email' InputPlaceHolder="Info@lorem.com" value= {email} onChange={(e) => setEmail(e.target.value)}/>
              {/* <input 
                type="email" 
                placeholder="Info@lorem.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              /> */}
              <AppButton buttonText="Established" buttonType="submit" />
            </form>

            {error && <p className="error">{error}</p>}
          </div>
        </div>
      </div>
    </footer>
  );
}
