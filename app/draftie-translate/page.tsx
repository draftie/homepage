
'use client';

import Link from 'next/link';
import Footer from '../../components/Footer';

export default function DraftieTranslatePage() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20translation%20technology%20workspace%20with%20multiple%20language%20texts%20floating%20in%20holographic%20displays%2C%20AI%20neural%20network%20visualization%2C%20global%20communication%20symbols%2C%20clean%20minimalist%20professional%20environment%20with%20blue%20and%20white%20lighting%20elements&width=1920&height=1080&seq=draftie-translate-bg&orientation=landscape')`
          }}
        ></div>

        <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="w-24 h-24 bg-blue-100/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-translate-2 text-3xl text-blue-100"></i>
              </div>
              
              <h1 className="text-4xl font-bold text-white mb-4">
                Draftie Translate
              </h1>
              
              <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                開発中
              </div>
            </div>
            
            <p className="text-xl text-blue-100 mb-4 leading-relaxed">
              特許文書専門翻訳サービス
            </p>
            
            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              特許文書の多言語翻訳サービスを開発中です。<br/>
              正確性と専門性を兼ね備えた翻訳機能をご提供予定です。
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-8 border border-white/20">
              <h2 className="text-2xl font-semibold text-white mb-4">予定機能</h2>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <div className="flex items-center mb-2">
                    <i className="ri-arrow-right-line text-blue-100 mr-2"></i>
                    <span className="font-medium text-white">多言語対応</span>
                  </div>
                  <p className="text-blue-100 text-sm">日本語⇔英語をはじめとする主要言語間の翻訳</p>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <i className="ri-book-open-line text-blue-100 mr-2"></i>
                    <span className="font-medium text-white">専門用語辞書</span>
                  </div>
                  <p className="text-blue-100 text-sm">特許分野の専門用語に特化した高精度辞書</p>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <i className="ri-file-check-line text-blue-100 mr-2"></i>
                    <span className="font-medium text-white">品質保証</span>
                  </div>
                  <p className="text-blue-100 text-sm">AI翻訳と専門家校正の組み合わせによる高品質な翻訳</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="bg-white text-slate-800 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors cursor-pointer whitespace-nowrap">
                ホームに戻る
              </Link>
              <Link href="/#contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-slate-800 transition-colors cursor-pointer whitespace-nowrap">
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
