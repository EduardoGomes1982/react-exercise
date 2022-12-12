import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import OfferCard from "./components/Main/ContentCard/OfferCard";
import RegistrationCard from "./components/Main/ContentCard/RegistrationCard";
import StartCard from "./components/Main/ContentCard/StartCard";
import Start from "./routes/Start";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />}>
          <Route index element={<Main elementCard={<StartCard />} primaryButtonText="Ver Promoção" buttonLink="/offer" />} />
          <Route path="/offer" element={<Main elementCard={<OfferCard />} primaryButtonText="Quero Participar" buttonLink="/registration" />} />
        </Route>
        <Route path="/registration" element={<Main elementCard={<RegistrationCard />} primaryButtonText="Ver Promoção" buttonLink="/offer" showTitle />} />
      </Routes>
    </BrowserRouter>
  );
}
