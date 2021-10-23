import React from 'react'
import Preloader from './components/Preloader'
import Header from "./components/Header"
import Banner from "./components/Banner"
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/portfolio/Portfolio';
import Testimonial from './components/testimonial/Testimonial';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';

const App = () => {
  return (

    <div>
      <Preloader/>
      <Header/>
      <Banner/>
      <About/>
      <Services/>
      <Portfolio/>
      <Testimonial/>
      <Blog/>
      <Contact/>
    
    </div>
  );
};

export default App
