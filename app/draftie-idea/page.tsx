
'use client';

import Link from 'next/link';
import Footer from '../../components/Footer';

export default function DraftieIdeaPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: `url('/images/draftie-idea-hero.png')`
          }}
        ></div>

        <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="w-24 h-24 bg-blue-100/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-lightbulb-line text-3xl text-blue-100"></i>
              </div>
              
              <h1 className="text-4xl font-bold text-white mb-4">
                Draftie Idea
              </h1>
              
              <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                開発中
              </div>
            </div>
            
            <p className="text-xl text-blue-100 mb-4 leading-relaxed">
              特許戦略マップに基づく発明支援
            </p>
            
            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              AIが業界動向と技術トレンドを分析し、発明アプローチを提案。<br />
              ユーザの戦略的な特許ポートフォリオ構築を支援します。
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-8 border border-white/20">
              <h2 className="text-2xl font-semibold text-white mb-4">予定機能</h2>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <div className="flex items-center mb-2">
                    <i className="ri-brain-line text-blue-100 mr-2"></i>
                    <span className="font-medium text-white">AI分析エンジン</span>
                  </div>
                  <p className="text-blue-100 text-sm">業界動向と技術トレンドをリアルタイムで分析し、戦略的な発明機会を特定</p>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <i className="ri-map-2-line text-blue-100 mr-2"></i>
                    <span className="font-medium text-white">戦略マッピング</span>
                  </div>
                  <p className="text-blue-100 text-sm">特許ポートフォリオの全体像を可視化し、最適な発明戦略を提案</p>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <i className="ri-rocket-line text-blue-100 mr-2"></i>
                    <span className="font-medium text-white">アイデア生成</span>
                  </div>
                  <p className="text-blue-100 text-sm">技術的な隙間を発見し、革新的な発明アイデアの創出をサポート</p>
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
