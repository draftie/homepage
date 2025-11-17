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

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-8 border border-white/20">
              <h2 className="text-2xl font-semibold text-white mb-6">Draftieの使い方</h2>

              {/* 対応分野 */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <i className="ri-cpu-line mr-3 text-blue-100"></i>
                  対応分野
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed text-left">
                  Draftie Documentは、特にソフトウェア関連発明やクライアント・サーバシステムに関する特許出願書類の作成に最適化されています。<br />
                  システムアーキテクチャ、データ処理フローなどの技術的特徴を正確に表現し、適切な権利範囲を確保します。
                </p>
              </div>

              {/* 請求項作成支援 */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <i className="ri-lightbulb-line mr-3 text-blue-100"></i>
                  請求項の作成支援
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-4 text-left">
                  アイデアのポイントを簡潔に入力するだけで、適切な請求項形式で出力します。
                </p>
                <div className="flex flex-col items-center space-y-3 max-w-2xl mx-auto">
                  <div className="w-full bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="flex items-center mb-3">
                      <div className="w-1 h-5 bg-blue-400 rounded-full mr-2"></div>
                      <h4 className="font-medium text-white text-left">入力例</h4>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="bg-slate-800/50 border border-slate-600 rounded px-3 py-2 text-left">
                          <div className="text-blue-200 text-sm">メインアイデア（請求項1用）</div>
                        </div>
                        <p className="text-blue-100/70 text-xs mt-1 text-left flex items-center">
                          <i className="ri-information-line mr-1"></i>
                          1行～数行のポイント
                        </p>
                      </div>
                      <div>
                        <div className="bg-slate-800/50 border border-slate-600 rounded px-3 py-2 text-left">
                          <div className="text-blue-200 text-sm">サブアイデア（従属項用）</div>
                        </div>
                        <p className="text-blue-100/70 text-xs mt-1 text-left flex items-center">
                          <i className="ri-information-line mr-1"></i>
                          1行～数行のポイント
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center py-1">
                    <i className="ri-arrow-down-s-line text-blue-300 text-3xl"></i>
                  </div>

                  <div className="w-full bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="flex items-center mb-3">
                      <div className="w-1 h-5 bg-cyan-400 rounded-full mr-2"></div>
                      <h4 className="font-medium text-white text-left">出力例</h4>
                    </div>
                    <div>
                      <div className="bg-slate-800/50 border border-slate-600 rounded px-3 py-2 text-left">
                        <div className="text-blue-200 text-sm leading-relaxed">
                          【請求項１】<br />
                          　構成要件Ａと、<br />
                          　構成要件Ｂと、<br />
                          　を備えるシステム。<br />
                          【請求項２】<br />
                          　構成要件Ｃを備える請求項１に記載のシステム。
                        </div>
                      </div>
                      <p className="text-blue-100/70 text-xs mt-1 text-left flex items-center">
                        <i className="ri-information-line mr-1"></i>
                        請求項形式で整形された文章
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 明細書の自動生成 */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <i className="ri-flow-chart mr-3 text-blue-100"></i>
                  明細書の自動生成
                </h3>
                <div className="flex flex-col items-center space-y-3 max-w-2xl mx-auto">
                  <div className="w-full bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-white text-sm font-bold">1</span>
                      </div>
                      <h4 className="font-medium text-white">請求項の入力</h4>
                    </div>
                    <p className="text-blue-100 text-sm ml-11">保護したい発明の権利範囲を請求項として入力します</p>
                  </div>

                  <div className="flex justify-center py-1">
                    <i className="ri-arrow-down-s-line text-blue-300 text-3xl"></i>
                  </div>

                  <div className="w-full bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-white text-sm font-bold">2</span>
                      </div>
                      <h4 className="font-medium text-white">先行技術調査</h4>
                    </div>
                    <p className="text-blue-100 text-sm ml-11">AIが関連する先行技術を自動検索し、自動的に背景技術欄と課題欄を作成します</p>
                  </div>

                  <div className="flex justify-center py-1">
                    <i className="ri-arrow-down-s-line text-blue-300 text-3xl"></i>
                  </div>

                  <div className="w-full bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-white text-sm font-bold">3</span>
                      </div>
                      <h4 className="font-medium text-white">実施例の自動生成</h4>
                    </div>
                    <p className="text-blue-100 text-sm ml-11">請求項を基に、各構成要件を説明した実施例を作成します</p>
                  </div>

                  <div className="flex justify-center py-1">
                    <i className="ri-arrow-down-s-line text-blue-300 text-3xl"></i>
                  </div>

                  <div className="w-full bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-white text-sm font-bold">4</span>
                      </div>
                      <h4 className="font-medium text-white">図面の作成</h4>
                    </div>
                    <p className="text-blue-100 text-sm ml-11">システム構成図やフローチャートなど、必要な図面を自動生成します</p>
                  </div>

                  <div className="flex justify-center py-1">
                    <i className="ri-arrow-down-s-line text-blue-300 text-3xl"></i>
                  </div>

                  <div className="w-full bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-white text-sm font-bold">5</span>
                      </div>
                      <h4 className="font-medium text-white">レビューと編集</h4>
                    </div>
                    <p className="text-blue-100 text-sm ml-11">生成された書類を確認し、必要に応じて修正・調整を行います</p>
                  </div>
                </div>
              </div>

              {/* エクスポート機能 */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <i className="ri-download-cloud-line mr-3 text-blue-100"></i>
                  エクスポート機能
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-4 text-left">
                  作成した出願書類は、以下の形式でダウンロードできます：
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="flex items-center mb-2">
                      <i className="ri-file-word-line text-blue-100 text-xl mr-3"></i>
                      <h4 className="font-medium text-white">Word形式（.docx）</h4>
                    </div>
                    <p className="text-blue-100 text-sm text-left">書類の確認に適したフォーマットで出力します。<br />編集も容易です。</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="flex items-center mb-2">
                      <i className="ri-html5-line text-blue-100 text-xl mr-3"></i>
                      <h4 className="font-medium text-white">HTML+画像</h4>
                    </div>
                    <p className="text-blue-100 text-sm text-left">特許庁への提出に適したフォーマットで出力します。</p>
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