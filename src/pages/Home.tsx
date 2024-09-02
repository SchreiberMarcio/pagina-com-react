import { FooterStyle } from "../components/Footer";
import { Header } from "../components/Header";
import { IconBar } from "../components/IconBar";
import { Section } from "../components/Section";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import Img1 from "../assets/image-2.jpeg";
import Img2 from "../assets/image-3.jpeg";
import Img3 from "../assets/image-4.jpeg";

export function Home() {
  return (
    <>
      <Header>
        <h1>Minha primeira página com React.</h1>
      </Header>
      <IconBar />
      <Section flexDirection="row">
        <div>
          <h2>Lorem Ipsum</h2>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Feugiat commodo auctor tempus vivamus turpis taciti.
            Litora mi integer fringilla pellentesque hac diam. Libero sollicitudin etiam etiam; ut eu dis class curae.
            Feugiat condimentum cras sapien ex semper posuere id convallis efficitur. Ridiculus vestibulum accumsan
            imperdiet turpis; eros pulvinar. Blandit conubia tempus dictumst donec vivamus. Imperdiet auctor vehicula
            vitae ante commodo imperdiet fringilla libero curabitur. Sed vehicula cubilia ad, est nibh blandit. Curae
            eget cursus scelerisque conubia faucibus neque ac. Fusce dignissim nascetur dui hac; lobortis hendrerit
            porta penatibus dis. Quis scelerisque donec; viverra senectus scelerisque litora. Anostra maecenas
            consequat; dapibus odio himenaeos. Integer risus malesuada est ridiculus varius nec. Arcu enim ullamcorper
            sed vel nec sed interdum. Ridiculus ac vulputate phasellus primis leo.
          </p>
        </div>
        <img src={Img1} alt="imagem 2" />
      </Section>
      <Section flexDirection="row-reverse">
        <div>
          <h2>Lorem Ipsum</h2>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Feugiat commodo auctor tempus vivamus turpis taciti.
            Litora mi integer fringilla pellentesque hac diam. Libero sollicitudin etiam etiam; ut eu dis class curae.
            Feugiat condimentum cras sapien ex semper posuere id convallis efficitur. Ridiculus vestibulum accumsan
            imperdiet turpis; eros pulvinar. Blandit conubia tempus dictumst donec vivamus. Imperdiet auctor vehicula
            vitae ante commodo imperdiet fringilla libero curabitur. Sed vehicula cubilia ad, est nibh blandit. Curae
            eget cursus scelerisque conubia faucibus neque ac. Fusce dignissim nascetur dui hac; lobortis hendrerit
            porta penatibus dis. Quis scelerisque donec; viverra senectus scelerisque litora. Anostra maecenas
            consequat; dapibus odio himenaeos. Integer risus malesuada est ridiculus varius nec. Arcu enim ullamcorper
            sed vel nec sed interdum. Ridiculus ac vulputate phasellus primis leo.
          </p>
        </div>
        <img src={Img2} alt="Imagem 3" />
      </Section>
      <Section flexDirection="row">
        <div>
          <h2>Lorem Ipsum</h2>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Feugiat commodo auctor tempus vivamus turpis taciti.
            Litora mi integer fringilla pellentesque hac diam. Libero sollicitudin etiam etiam; ut eu dis class curae.
            Feugiat condimentum cras sapien ex semper posuere id convallis efficitur. Ridiculus vestibulum accumsan
            imperdiet turpis; eros pulvinar. Blandit conubia tempus dictumst donec vivamus. Imperdiet auctor vehicula
            vitae ante commodo imperdiet fringilla libero curabitur. Sed vehicula cubilia ad, est nibh blandit. Curae
            eget cursus scelerisque conubia faucibus neque ac. Fusce dignissim nascetur dui hac; lobortis hendrerit
            porta penatibus dis. Quis scelerisque donec; viverra senectus scelerisque litora. Anostra maecenas
            consequat; dapibus odio himenaeos. Integer risus malesuada est ridiculus varius nec. Arcu enim ullamcorper
            sed vel nec sed interdum. Ridiculus ac vulputate phasellus primis leo.
          </p>
        </div>
        <img src={Img3} alt="Imagem 4" />
      </Section>
      <Contact>
        <h2>Contato</h2>
      </Contact>
      <FooterStyle>
        <Footer />
      </FooterStyle>
    </>
  );
}
