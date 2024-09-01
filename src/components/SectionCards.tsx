import { Avatar } from "./styleds/Avatar";
import { Card } from "./styleds/Card";
import { Container } from "./styleds/Container";

type CardContent = {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
};

const cardsContent: CardContent[] = [
  {
    imgSrc: "https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/external-monitor-multimedia-kiranshastry-gradient-kiranshastry.png",
    imgAlt: "Imagem 1",
    title: "Somente para Desktops",
    description: "Vamos aprender como utilizar um framework.",
  },
  {
    imgSrc: "https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/external-layers-multimedia-kiranshastry-gradient-kiranshastry.png ",
    imgAlt: "Imagem 2",
    title: "Criado com componentes",
    description: "Utilizamos o Styled Component.",
  },
  {
    imgSrc: "https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/external-check-multimedia-kiranshastry-gradient-kiranshastry.png",
    imgAlt: "Imagem 3",
    title: "Fácil aproveitamento",
    description: "Estamos no caminho.",
  },
];

export function SectionCards() {
  return (
    <Container>
      {cardsContent.map((card) => (
        <Card>
          <Avatar src={card.imgSrc} alt={card.imgAlt} />
          <h2>{card.title}</h2>
          <p>{card.description}</p>
        </Card>
      ))}
    </Container>
  );
}
