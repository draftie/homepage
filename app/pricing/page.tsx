'use client';

import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Pricing() {
  const plans = [
    {
      name: '無料トライアル',
      price: '¥0',
      period: '',
      description: '14日間無料でお試しいただけます',
      features: [
        '14日間無料',
        '1件の請求項生成',
        '1件の明細書生成',
        'クレジットカード登録不要',
        'データ保存期間：14日間',
      ],
      buttonText: '無料で始める',
      href: '/contact',
      highlighted: false,
    },
    {
      name: 'スタンダードプラン',
      price: '¥30,000',
      period: '/月',
      description: '個人利用や小規模チームに最適',
      features: [
        '10件の請求項生成',
        '10件の明細書生成',
        'サブスクリプション期間のデータ保存',
      ],
      buttonText: '今すぐ始める',
      href: '/contact',
      highlighted: true,
    },
    {
      name: 'エンタープライズプラン',
      price: 'お問い合わせ',
      period: '',
      description: '大企業やチームでのご利用に対応',
      features: [
        'チーム機能',
        '専任サポート',
        'カスタムプラン対応',
      ],
      buttonText: 'お問い合わせ',
      href: '/contact',
      highlighted: false,
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section className="py-16 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              料金プラン
            </h1>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`rounded-lg p-8 ${
                    plan.highlighted
                      ? 'bg-white border-2 border-slate-700 shadow-lg'
                      : 'bg-white border border-slate-200 shadow-md'
                  } transition-all hover:shadow-xl`}
                >
                  <div className="text-center mb-4 h-8">
                    {plan.highlighted && (
                      <span className="inline-block bg-slate-700 text-white text-sm font-bold px-4 py-1 rounded-full">
                        おすすめ
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold mb-2 text-slate-900">
                    {plan.name}
                  </h3>

                  <p className="text-sm mb-6 text-slate-600">
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                    {plan.period && (
                      <span className="text-lg text-slate-600">
                        {plan.period}
                      </span>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <i className="ri-check-line text-xl mr-2 text-slate-600"></i>
                        <span className="text-sm text-slate-700">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={plan.href}
                    className={`block w-full py-3 px-6 rounded-lg font-semibold transition-colors text-center ${
                      plan.highlighted
                        ? 'bg-slate-800 text-white hover:bg-slate-700'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    {plan.buttonText}
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <p className="text-slate-600">
                ご不明な点がございましたら、
                <a href="/contact" className="text-slate-700 hover:text-slate-900 font-semibold ml-1 underline">
                  お問い合わせ
                </a>
                ください
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
