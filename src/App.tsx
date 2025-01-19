import { BrowserRouter, Route, Routes } from "react-router-dom";
import { pagesPaths } from "./constans/pagesPaths";
import HomePage from "./pages/HomePage";
import { GlobalStyle } from "./styles/global";
import RealizationDetail from "./pages/RealizationDetail";
import CookiesBanner from "./components/organisms/CookieBanner/CookieBanner";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { Header } from "./components/organisms/Header/Header";

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Header />
    <Routes>
      <Route index path={pagesPaths.homePage} element={<HomePage />} />
      {/* <Route path={pagesPaths.realization} element={<RealizationDetail />} /> */}
      <Route path={pagesPaths.privacyPolicy} element={<PrivacyPolicy />} />
    </Routes>
    <CookiesBanner />
  </BrowserRouter>
);

export default App;
