import { IconBox } from "../components/IconBox";
import styled from "styled-components";
import Desktop from "../assets/desktop.svg"
import Components from "../assets/components.svg"
import Check from "../assets/check.svg"

export function IconBar() {
  return (
    <IconBarStyle>
      <IconBox>
        <img src={Desktop} alt="desktop icon" />
        <div>
          <h3>Somente para desktop</h3>
          <p>Vamos aprender como utilizar um framework.</p>
        </div>
      </IconBox>
      <IconBox>
        <img src={Components} alt="components icon" />
        <div>
          <h3>Criado com componentes</h3>
          <p>Utilizamos o Styled Components.</p>
        </div>
      </IconBox>
      <IconBox>
        <img src={Check} alt="check icon" />
        <div>
          <h3>Fácil aproveitamento</h3>
          <p>Estamos no caminho.</p>
        </div>
      </IconBox>
    </IconBarStyle>
  );
}

export const IconBarStyle = styled.div`
  width: calc(100% - 6rem);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 2rem auto;
  padding: 6rem;

  @media (max-width: 1000px) {
    padding: 3rem 0;
  }
  @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: 1fr;
    padding: 2rem;
  }
`;
