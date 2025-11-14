'use client';

import Link from 'next/link';

export default function Services() {
  const services = [
    {
      icon: 'ri-lightbulb-line',
      title: 'Draftie Idea',
      subtitle: '特許戦略マップに基づく発明支援',
      description: 'AIが業界動向と技術トレンドを分析し、発明アプローチを提案。ユーザの戦略的な特許ポートフォリオ構築を支援します。',
      status: '開発中',
      statusColor: 'bg-amber-100 text-amber-700',
      bgImage: 'https://readdy.ai/api/search-image?query=abstract%20minimalist%20illustration%20of%20lightbulb%20and%20innovation%20concepts%2C%20navy%20blue%20and%20slate%20color%20scheme%2C%20clean%20geometric%20shapes%20with%20soft%20gradients%2C%20professional%20business%20vector%20art%20with%20subtle%20tech%20elements%2C%20modern%20flat%20design%20style&width=800&height=400&seq=idea-bg&orientation=landscape'
    },
    {
      icon: 'ri-file-text-line',
      title: 'Draftie Document',
      subtitle: '出願書類の作成支援',
      description: '複雑な特許出願書類の作成をサポート。AIが技術内容を理解し、適切な表現と構成を提案してユーザの作業を効率化。',
      status: '提供中',
      statusColor: 'bg-emerald-100 text-emerald-700',
      bgImage: 'https://readdy.ai/api/search-image?query=abstract%20minimalist%20illustration%20of%20document%20creation%20and%20filing%2C%20navy%20blue%20and%20slate%20color%20scheme%2C%20clean%20geometric%20shapes%20representing%20papers%20and%20text%2C%20professional%20business%20vector%20art%20with%20modern%20design%20elements&width=800&height=400&seq=document-bg&orientation=landscape'
    },
    {
      icon: 'ri-search-line',
      title: 'Draftie Research',
      subtitle: '特許調査・分析支援',
      description: '膨大な特許データベースから関連技術を瞬時に検索・分析。ユーザの競合調査と優位性確立活動をサポート。',
      status: '開発中',
      statusColor: 'bg-amber-100 text-amber-700',
      bgImage: 'https://readdy.ai/api/search-image?query=abstract%20minimalist%20illustration%20of%20research%20and%20data%20analysis%2C%20navy%20blue%20and%20slate%20color%20scheme%2C%20clean%20geometric%20shapes%20representing%20search%20and%20discovery%2C%20professional%20business%20vector%20art%20with%20database%20visualization%20elements&width=800&height=400&seq=research-bg&orientation=landscape'
    },
    {
      icon: 'ri-translate-2',
      title: 'Draftie Translate',
      subtitle: '多言語翻訳支援',
      description: '特許文書の専門用語翻訳をサポート。国際出願や外国特許調査におけるユーザの言語対応活動を支援。',
      status: '開発中',
      statusColor: 'bg-amber-100 text-amber-700',
      bgImage: 'https://readdy.ai/api/search-image?query=abstract%20minimalist%20illustration%20of%20translation%20and%20global%20communication%2C%20navy%20blue%20and%20slate%20color%20scheme%2C%20clean%20geometric%20shapes%20representing%20languages%20and%20text%20conversion%2C%20professional%20business%20vector%20art%20with%20international%20elements&width=800&height=400&seq=translate-bg&orientation=landscape'
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            AIツールによる特許活動支援
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            ユーザの知的財産活動を包括的にサポートする支援ツールを提供します
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div 
                className="relative h-48 bg-cover bg-center flex items-center justify-center"
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.7)), url('${service.bgImage}')`
                }}
              >
                <div className="w-24 h-24 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-white/50">
                  <i className={`${service.icon} text-slate-800 text-4xl`}></i>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${service.statusColor}`}>
                    {service.status}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mr-4">
                    <i className={`${service.icon} text-slate-700 text-xl`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">{service.title}</h3>
                    <p className="text-sm text-slate-500">{service.subtitle}</p>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {service.title === 'Draftie Research' ? (
                  <Link href="/draftie-research" className="bg-slate-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-700 transition-colors whitespace-nowrap cursor-pointer inline-block">
                    詳細を見る
                  </Link>
                ) : service.title === 'Draftie Translate' ? (
                  <Link href="/draftie-translate" className="bg-slate-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-700 transition-colors whitespace-nowrap cursor-pointer inline-block">
                    詳細を見る
                  </Link>
                ) : service.title === 'Draftie Idea' ? (
                  <Link href="/draftie-idea" className="bg-slate-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-700 transition-colors whitespace-nowrap cursor-pointer inline-block">
                    詳細を見る
                  </Link>
                ) : (
                  <Link href="/contact" className="bg-slate-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-700 transition-colors whitespace-nowrap cursor-pointer inline-block">
                    詳細を見る
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}