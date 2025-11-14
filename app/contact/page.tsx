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
            backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.8)), url('https://readdy.ai/api/search-image?query=minimalist%20flat%20design%20illustration%20of%20customer%20support%20and%20communication%2C%20navy%20blue%20and%20white%20color%20scheme%2C%20professional%20business%20illustration%20with%20contact%20icons%2C%20clean%20geometric%20shapes%2C%20vector%20art%20style%20with%20subtle%20tech%20elements&width=1920&height=600&seq=contact-hero&orientation=landscape')`
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
