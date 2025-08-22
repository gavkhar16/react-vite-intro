import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="paragraph">
        <div className="footer-top">
          <div className="logo-and-nav">
            <div className="logo">
              <img src="./photo/footer.png" alt="footerlogo" />
            </div>
            <ul className="nav-links">
              <li>
                <a href="Lorem">Lorem</a>
              </li>
              <li>
                <a href="Contrary">Contrary To A</a>
              </li>
              <li>
                <a href="Randomised">Randomised</a>
              </li>
              <li>
                <a href="Passage">Passage</a>
              </li>
              <li>
                <a href="Necessary">Necessary</a>
              </li>
            </ul>
          </div>
          <div className="subscribe">
            <h4>Lorem Ipsum is simply dummy text of the printing and type</h4>
            <div className="input-group">
              <input type="email" placeholder="Info@lorem.com" />
              <button type="submit">Established</button>
            </div>
          </div>
        </div>

        <hr className="divider" />

        <div className="footer-middle">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged.
          </p>
        </div>

        <div className="footer-bottom">
          <div className="social-icons">
            <a href="https://www.instagram.com" target="_blank">
              <img src="./photo/instagram.png" alt="instagram" />
            </a>
            <a href="https://twitter.com" target="_blank">
              <img src="./photo/twitter (1).png" alt="twitter" />
            </a>
            <a href="https://www.facebook.com" target="_blank">
              <img src="./photo/facebook.png" alt="facebook" />
            </a>
            <a href="https://www.linkedin.com" target="_blank">
              <img src="./photo/linkedin.png" alt="linkedin" />
            </a>
          </div>
          <p className="copyright">Lorem Ipsum is simply dummy</p>
        </div>
      </div>
    </footer>
  );
}
