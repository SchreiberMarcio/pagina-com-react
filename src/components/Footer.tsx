import styled from "styled-components";
import Facebook from "../assets/facebook.svg"
import Instagram from "../assets/instagram.svg"
import Linkedin from "../assets/linkedin.svg"

export function Footer() {
  return (
    <FooterStyle>
      <div>
        About &bull; Contact &bull; Terms of Use &bull; Privacy Policy
        <p>@ Schreiber Marcio 2024. All Rights Reserved</p>
      </div>
      <div>
        <a href="https://www.facebook.com/?locale=pt_BR" target="_blank" rel="noopener noreferrer">
          <img src={Facebook} alt="facebook icon" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <img src={Instagram} alt="instagram icon" />
        </a>
        <a href="https://www.linkedin.com/in/marcioandreschreiber/" target="_blank" rel="noopener noreferrer">
          <img src={Linkedin} alt="linkedin icon" />
        </a>
      </div>
    </FooterStyle>
  );
}

export const FooterStyle = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 10rem;
  color: #002135;

  div {
    font-weight: 600;
    font-size: 14px;
    p {
      color: #000;
      font-weight: normal;
      font-size: 12px;
    }
    img {
      width: 30px;
      height: auto;
      margin: 10px;
    }
  }
`;
