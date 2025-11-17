'use client';

import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function DraftieDocumentPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: `url('/images/draftie-document-hero.png')`
          }}
        ></div>

        <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="w-24 h-24 bg-blue-100/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-file-text-line text-3xl text-blue-100"></i>
              </div>
              
              <h1 className="text-4xl font-bold text-white mb-4">
                Draftie Document
              </h1>
              
              <div className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                提供中
              </div>
            </div>
            
            <p className="text-xl text-blue-100 mb-4 leading-relaxed">
              出願書類の作成支援
            </p>
            
            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              複雑な特許出願書類の作成をサポート。AIが技術内容を理解し、<br />
              適切な表現と構成を提案してユーザの作業を効率化します。
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-8 border border-white/20">
              <h2 className="text-2xl font-semibold text-white mb-6">主要機能</h2>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <div className="flex items-center mb-3">
                    <i className="ri-edit-2-line text-blue-100 mr-3"></i>
                    <span className="font-medium text-white">自動起案機能</span>
                  </div>
                  <p className="text-blue-100 text-sm">技術内容を入力するだけで、AIが適切な特許出願書類の構成と表現を自動生成</p>
                </div>
                <div>
                  <div className="flex items-center mb-3">
                    <i className="ri-search-eye-line text-blue-100 mr-3"></i>
                    <span className="font-medium text-white">技術解析</span>
                  </div>
                  <p className="text-blue-100 text-sm">発明の技術的特徴を詳細に分析し、最適なクレーム構成を提案</p>
                </div>
                <div>
                  <div className="flex items-center mb-3">
                    <i className="ri-check-double-line text-blue-100 mr-3"></i>
                    <span className="font-medium text-white">品質向上支援</span>
                  </div>
                  <p className="text-blue-100 text-sm">書類の論理構成や表現の一貫性をチェックし、品質向上のための改善提案を実施</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-8 border border-white/20">
              <h2 className="text-2xl font-semibold text-white mb-4">利用メリット</h2>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <i className="ri-time-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h3 className="font-medium text-white mb-2">作業時間短縮</h3>
                    <p className="text-blue-100 text-sm">従来数日かかっていた書類作成を数時間に短縮し、効率的な特許出願を実現</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <i className="ri-shield-check-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h3 className="font-medium text-white mb-2">品質の均一化</h3>
                    <p className="text-blue-100 text-sm">AIによる一貫した品質管理で、担当者による品質のばらつきを解消</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <i className="ri-money-dollar-circle-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h3 className="font-medium text-white mb-2">コスト削減</h3>
                    <p className="text-blue-100 text-sm">内製化による外部委託費用の削減と、効率化による人件費の最適化を実現</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <i className="ri-lightbulb-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h3 className="font-medium text-white mb-2">特許戦略に注力</h3>
                    <p className="text-blue-100 text-sm">明細書の作成にかける手間を減らし、発明の発掘や権利化方針の検討に注力可能</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="bg-white text-slate-800 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors cursor-pointer whitespace-nowrap">
                ホームに戻る
              </Link>
              <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-slate-800 transition-colors cursor-pointer whitespace-nowrap">
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