'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section 
          className="py-16 bg-cover bg-center relative"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.8)), url('/images/contact-hero.png')`
          }}
        >
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center text-white relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              お問い合わせ
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Draftieに関するご質問はお気軽にどうぞ。
            </p>
          </div>
        </section>

        <div className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
