import { Routes, Route } from "react-router-dom";
import ScrollToTop from "@/hooks/useScroll";

import Home from "./pages";
import GalleryPage from "./pages/gallery";
import Navbar from "./components/navigation";
import KingsPage from "./pages/kings";
import VideoPage from "./pages/videos";
import CultureAndTraditions from "./pages/culture_traditions";

import Attractions from "./pages/attractions";
import AttractionDetail from "./pages/attractions/slug";
import SlugPage from "./pages/slug";

import PageNotFound from "./components/error/PageNotFound";

import MarkdownHelp from "./pages/help/markdown_guide";
import SubmitContent from "./pages/help/submit_content";
import FeedbackReportPage from "./pages/feedback";

const App: React.FC = () => {
  return (
    <>
        <ScrollToTop />
        <Navbar />

        <Routes>
          {/* --------------SPECIFIC PAGES */}
          <Route path="/" element={<Home />} />

          <Route path="/gallery/" element={<GalleryPage />} />
          <Route path="/videos/" element={<VideoPage />} />
          <Route path="/kings/" element={<KingsPage />} />
          <Route path="/attractions/" element={<Attractions />} />
          <Route
            path="/culture_traditions/"
            element={<CultureAndTraditions />}
          />

          <Route path="/help/submit_content/" element={<SubmitContent />} />
          <Route path="/help/markdown_guide/" element={<MarkdownHelp />} />
          <Route path="/feedback/" element={<FeedbackReportPage />} />
          {/* -------------------------------DYNAMIC PAGES----------------------- */}

          <Route path="/attractions/:slug/" element={<AttractionDetail />} />
          <Route path="/:slug/" element={<SlugPage />} />
          {/* ----------------------NOT FOUND PAGE------------------------- */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
    </>
  );
};

export default App;
