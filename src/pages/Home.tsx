import { Banner } from "../components/Banner";
import { SectionCards } from "../components/SectionCards";
import { Contact } from "../components/styleds/Contact";
import { Container } from "../components/styleds/Container";
import { Footer } from "../components/styleds/Footer";
import { Main } from "../components/styleds/Main";

export function Home() {
  return (
    <>
      <Banner />
        <SectionCards />

      <Main>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam obcaecati soluta neque tenetur animi ab veritatis quibusdam maiores aut temporibus debitis porro, doloribus asperiores eum perferendis veniam repellat a tempora.


        </p>
        
      </Main>

      <Contact>
        <h2>Contatos</h2>
      </Contact>
      <Footer>
        <Container>
        <p>About</p>
        <p>Contact</p>

        </Container>

       
      </Footer>
    </>
  );
}
