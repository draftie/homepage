'use client';
import Link from 'next/link';

export default function Hero() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.8)), url('https://static.readdy.ai/image/f119cb5900d78dd215c8812732671709/74d1201127c6156a7afdd436b67a41d6.png')`
      }}
      suppressHydrationWarning={true}
    >
      <div className="relative z-10 text-center px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          AIが支援する<br />
          <span className="text-blue-100">特許実務</span>
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
          戦略立案から特許調達まで、ユーザの知的財産活動を<br />
          AIツールが包括的にサポートします。
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link href="/contact" className="bg-white text-slate-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-100 transition-colors cursor-pointer whitespace-nowrap">
            無料相談を申し込む
          </Link>
          <Link href="#services" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-slate-800 transition-colors whitespace-nowrap cursor-pointer">
            サービス詳細
          </Link>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="ri-arrow-down-line text-white text-2xl"></i>
      </div>
    </section>
  );
}
