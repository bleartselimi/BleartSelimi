import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../layouts";
import {
  ArticleOne,
  Articles,
  Chatly,
  LinkMobile,
  LinkWeb,
  MobileShop,
  MuseumInformationSystem,
  NotFound,
  Portfolio,
  TempoZone,
} from "../pages";
import { articleLinks } from "../pages/Article/ArticleLinks";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Portfolio />} />
        <Route path="/tempo-zone" element={<TempoZone />} />
        <Route path="/chatly" element={<Chatly />} />
        <Route path="/link-mobile" element={<LinkMobile />} />
        <Route path="/link-web" element={<LinkWeb />} />
        <Route
          path="/museum-information-system"
          element={<MuseumInformationSystem />}
        />
        <Route path="/mobile-shop" element={<MobileShop />} />
        {/* Articles - START */}
        <Route path="/articles" element={<Articles />} />
        <Route path={articleLinks.articleOne} element={<ArticleOne />} />
        {/* Articles - END */}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routing;
