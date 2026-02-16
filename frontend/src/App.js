
import './App.css';
import './index.css';
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home';
import Login from './pages/Login/login';
import Signup from './pages/Signup/signup';
// import Renewal from './pages/Service-pages/renewal';
import Service from './pages/Service-pages/car-service';
import ParentHome from './pages/ParentHome/home';
import AppointForm from './pages/forms/appointmentForm';
import RoadSideAssistance from './pages/Service-pages/roadside';
import Layout from './components/navbar/layout';
import Coming from './components/comingSoon/coming';
import UnderProgress from './components/underProgress/underprogress';
import EVLandingPage from './pages/EVpage/evpage';
import EvbikePage from './pages/EVpage/evbikePage';
import EVDealership from './pages/EVpage/evdealership';
import DealershipContact from './pages/DealershipContact/DealershipContact';
import ContractServicesPage from './pages/Service-pages/contract-form';
import Blog from './pages/Blog/blog';
import BlogDetail from './pages/Blog/blogDetail';
import PrivacyPolicy from './pages/PrivacyPolicy/privacyPolicy';
import TermsConditions from './pages/TermsConditions/termsConditions';
import OurTeam from './pages/OurTeam/ourTeam';
import Scooty from './pages/Scooty/scooty';
import BatteryPage from './pages/Battery/battery';
import Careers from './pages/Careers/careers';
import Gallery from './pages/Gallery/gallery';
function App() {
  return (
    <Routes>

      <Route path="/" element={<ParentHome />} />
      <Route
        path="/*"
        element={
          <Layout>
            <Routes>
              <Route path="/carhub" element={<Home />} />
              <Route path="/carhub/login" element={<Login />} />
              <Route path="/carhub/signup" element={<Signup />} />
              <Route path="/carhub/services" element={<Service />} />
              <Route path="/appointment" element={<AppointForm />} />
              <Route path="/carhub/roadside-services" element={<RoadSideAssistance />} />
              <Route path="/carhub/contract-form" element={<ContractServicesPage />} />
              <Route path='/under-progress' element={<UnderProgress />} />
            </Routes>
          </Layout>
        }
      />
      <Route path='/ev-dealership-opportunity' element={<EVLandingPage />} />
      <Route path='/evbikemodels' element={<EvbikePage />} />
      <Route path='/evdealershipcontact' element={<DealershipContact />} />
      <Route path='/evdealership' element={<EVDealership />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/blog/:id' element={<BlogDetail />} />
      <Route path='/privacy-policy' element={<PrivacyPolicy />} />
      <Route path='/terms-conditions' element={<TermsConditions />} />
      <Route path='/our-team' element={<OurTeam />} />
      <Route path='/scooty' element={<Scooty />} />
      <Route path='/battery' element={<BatteryPage />} />
      <Route path='/careers' element={<Careers />} />
      <Route path='/gallery' element={<Gallery />} />
    </Routes>
  );
}

export default App;
