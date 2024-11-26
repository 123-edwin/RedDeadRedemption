import { NavBar } from "./Components/NavBar/NavBar";
import { Carousel } from "./Components/Carousel/Carousel";
import { CarouselItems } from "./Components/Carousel/CarouselItems";
import { TableRed } from "./Components/Table/TableRed.jsx";
import {StoryAndNarrative} from "./Components/Paragraphs/StoryandNarrative.jsx";
import { GameplayMechanics } from "./Components/Paragraphs/GameplayMechanics.jsx";
import { WorldDesign } from "./Components/Paragraphs/WorldDesign.jsx";
import { CulturalImpact } from "./Components/Paragraphs/CulturalImpact.jsx";
import "./App.css";

function App() {
const news = [
  {
    image: 'https://sm.ign.com/t/ign_es/news/r/red-dead-r/red-dead-redemption-pc-port-may-finally-be-coming-datamine-s_1vkg.1024.jpg',
    title: 'Nueva expansión de Red Dead Redemption',
    description: 'Explora nuevos territorios en esta actualización.',
  },
  {
    image: 'https://www.infobae.com/resizer/v2/https%3A%2F%2Fs3.amazonaws.com%2Farc-wordpress-client-uploads%2Finfobae-wp%2Fwp-content%2Fuploads%2F2018%2F10%2F31135807%2FRed-Dead-Redemption-2-1.jpg?auth=b834aed399388ef187901fb886cdb28fa4cca9303bfc58e6e98d747239afc629&smart=true&width=1024&height=512&quality=85',
    title: 'Actualización de Cyberpunk 2077',
    description: 'Corrige errores y mejora la experiencia de juego.',
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
          />
        ))}
    </Carousel>
    <TableRed />
    <StoryAndNarrative />
    <GameplayMechanics />
    <WorldDesign />
    <CulturalImpact />
    
    </>
  );
}

export default App;
