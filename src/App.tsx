import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Properties from './pages/Properties';
import PropertyDetail from './pages/PropertyDetail';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

const heroSlides = [
  '/images/hero_bg_1.jpg',
  '/images/hero_bg_2.jpg',
  '/images/hero_bg_3.jpg'
];

const properties = [
  {
    title: '5232 California Fake, Ave. 21BC',
    location: 'California, USA',
    price: '$1,291,000',
    beds: 2,
    baths: 2,
    image: '/images/img_1.jpg'
  },
  {
    title: '8792 Modern Villa, Street 10',
    location: 'Miami, USA',
    price: '$1,150,000',
    beds: 3,
    baths: 3,
    image: '/images/img_2.jpg'
  },
  {
    title: '1167 Downtown Residence',
    location: 'New York, USA',
    price: '$998,000',
    beds: 2,
    baths: 1,
    image: '/images/img_3.jpg'
  }
];

const features = [
  {
    title: 'Expert agents',
    description: 'Dedicated support for buying and selling with confidence.',
    icon: '👔'
  },
  {
    title: 'Fast approvals',
    description: 'Smooth financing and quicker property handover.',
    icon: '⚡'
  },
  {
    title: 'Modern listings',
    description: 'Curated homes with verified amenities and locations.',
    icon: '🏡'
  }
];

function App(){
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/properties" element={<Properties/>} />
          <Route path="/property/:id" element={<PropertyDetail/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
