import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import SupportPage from "../pages/SupportPage";
import DownloadPage from "../pages/DownloadPage";
import PricePage from "../pages/PricePage";
import AboutPage from "../pages/AboutPage";
import SingleEmployee from "../pages/SingleEmployee";
import PartnerPage from "../pages/PartnersPage";
import ResourcesPage from "../pages/ResourcesPage";
import ContactUs from "../pages/ContectUs";
import DemoPage from "../pages/DemoPage";
import NotesPage from "../pages/NotesPage";
import Account from "../pages/Account";
import BlogPage from "../pages/BlogPage";
import SingleBlogPage from "../pages/SingleBlog";
import BlogDescription from "../pages/BlogDescription";
import NewsAllPages from "../pages/NewsAllPages";
import AllAboutuspage from "../pages/AllAboutuspage";
import SuccessPaymentPage from "../pages/SuccessPaymentPage";
import FailPaymentPage from "../pages/FailPaymentPage";
import TermandContion from "../pages/TermandContion";
import PrivacyPolicy from "../pages/PrivacyPolicy";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/support-faq" element={<SupportPage />} />
      <Route path="/support-downloads" element={<DownloadPage />} />
      <Route path="/support-notes" element={<NotesPage />} />
      <Route path="/support-account-management" element={<Account />} />
      <Route path="/pricing" element={<PricePage />} />
      <Route path="/about/clinical-advisors" element={<AboutPage />} />
      <Route
        path="/about/clinical-advisors/:employee"
        element={<SingleEmployee />}
      />
      <Route path="/about/partners" element={<PartnerPage />} />
      <Route path="/resources" element={<ResourcesPage />} />
      <Route path="/resources/blog/:id" element={<BlogPage />} />
      <Route
        path="/resources/blog/description/:id"
        element={<SingleBlogPage />}
      />
      <Route path="/all_about_information" element={<AllAboutuspage />} />
      <Route path="/all_news_information" element={<NewsAllPages />} />
      <Route
        path="/resources/blogDescription/all_Blog"
        element={<BlogDescription />}
      />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/demo-request" element={<DemoPage />} />

      {/* term and condition */}
      <Route path="/term-condition" element={<TermandContion />} />
{/* privacy lolicy */}
<Route path="/Privacy-policy" element={<PrivacyPolicy />} />
      {/* [payment] */}
      <Route path="/paymet-successfull/:id" element={<SuccessPaymentPage />} />
      <Route path="/paymet-failed/:id" element={<FailPaymentPage />} />

      {/* Not Found */}
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
    </Routes>
  );
};
