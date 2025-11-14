'use client';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Features from '../components/Features';
import About from '../components/About';
import CTA from '../components/CTA';
import ContactForm from './contact/ContactForm';
import ContactInfo from './contact/ContactInfo';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Features />
      <About />
      <Contact />
      <CTA />
      <Footer />
    </main>
  );
}
