import { NavBar } from "./Components/NavBar/NavBar";
import { Carousel } from "./Components/Carousel/Carousel";
import { CarouselItems } from "./Components/Carousel/CarouselItems";
import { TableRed } from "./Components/Table/TableRed.jsx";
import { StoryAndNarrative } from "./Components/Paragraphs/StoryandNarrative.jsx";
import { GameplayMechanics } from "./Components/Paragraphs/GameplayMechanics.jsx";
import { WorldDesign } from "./Components/Paragraphs/WorldDesign.jsx";
import { CulturalImpact } from "./Components/Paragraphs/CulturalImpact.jsx";
import "./App.css";

function App() {
  const news = [
    {
      image: "https://i.blogs.es/d769bf/red-dead-redemption-2/1200_800.webp",
      alternative: "Arthur Morgan disparando un arma",
      title: "Red Dead Redemption 2: requisitos mínimos y recomendados para PC",
      description:
        "La aventura de Arthur Morgan no es especialmente demandante para jugar en Full HD, pero a 4K es otra historia.",
    },
    {
      image:
        "https://thisgengaming.com/wp-content/uploads/2023/08/Red-Dead-Redemption.jpg",
      alternative: "Portada de Red Dead Redemption de John Marston",
      title:
        "Red Dead Redemption y Undead Nightmare llegarán a PC el 29 de octubre",
      description:
        "Por primera vez en su histórico legado, el viaje de John Marston podrá disfrutarse en PC con todo lujo de detalles",
    },
  ];

  return (
    <>
      <NavBar />

      <Carousel>
        {news.map((item, index) => (
          <CarouselItems
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            alternative={item.alternative}
          />
        ))}
      </Carousel>
      <TableRed />
      <StoryAndNarrative />
      <GameplayMechanics />
      <WorldDesign />
      <CulturalImpact />
      <div className="youtube-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ksUe40EyKL8?si=e1yDUJmgmfIriFBm"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Y_GHrFPqx9o?si=yAgPGMGNA3oDO8V2"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}

export default App;
