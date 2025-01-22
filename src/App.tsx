import { BrowserRouter, Route, Routes } from "react-router-dom";
import { pagesPaths } from "./constans/pagesPaths";
import HomePage from "./pages/HomePage";
import { GlobalStyle } from "./styles/global";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import OfferPage from "./pages/OfferPage";
import RealizationsPage from "./pages/RealizationsPage";
import ConcretePlantPage from "./pages/ConcretePlantPage";
import MachineParkPage from "./pages/MachineParkPage";
import ContactPage from "./pages/ContactPage";

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Routes>
      <Route index path={pagesPaths.homePage} element={<HomePage />} />
      <Route path={pagesPaths.privacyPolicy} element={<PrivacyPolicy />} />
      <Route path={pagesPaths.offer} element={<OfferPage />} />
      <Route path={pagesPaths.realizations} element={<RealizationsPage />} />
      <Route path={pagesPaths.concretePlant} element={<ConcretePlantPage />} />
      <Route path={pagesPaths.machinePark} element={<MachineParkPage />} />
      <Route path={pagesPaths.contact} element={<ContactPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
