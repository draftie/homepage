'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Terms() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section className="py-16 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              特定商取引法に基づく表記
            </h1>
          </div>
        </section>

        <div className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="space-y-8">

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3 border-b-2 border-slate-200 pb-2">
                  販売事業者名
                </h2>
                <p className="text-slate-700">
                  株式会社Draftie
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3 border-b-2 border-slate-200 pb-2">
                  運営統括責任者
                </h2>
                <p className="text-slate-700">
                  前田 充宏
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3 border-b-2 border-slate-200 pb-2">
                  所在地
                </h2>
                <p className="text-slate-700">
                  東京都港区北青山1丁目3番1号<br />
                  アールキューブ青山3階
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3 border-b-2 border-slate-200 pb-2">
                  お問い合わせ先（メールアドレス）
                </h2>
                <p className="text-slate-700">
                  info@draftie.ai
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3 border-b-2 border-slate-200 pb-2">
                  販売価格
                </h2>
                <p className="text-slate-700">
                  本サービスの各ページに記載された価格に基づきます。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3 border-b-2 border-slate-200 pb-2">
                  商品代金以外の必要料金
                </h2>
                <ul className="list-disc list-inside text-slate-700 space-y-2">
                  <li>消費税</li>
                  <li>インターネット接続に関する通信料（ユーザー負担）</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3 border-b-2 border-slate-200 pb-2">
                  お支払い方法
                </h2>
                <p className="text-slate-700">
                  クレジットカード決済（Stripe 等の決済事業者を使用）
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3 border-b-2 border-slate-200 pb-2">
                  お支払い時期
                </h2>
                <p className="text-slate-700 mb-2">
                  利用開始時または請求発生時
                </p>
                <p className="text-slate-600 text-sm">
                  ※サブスクリプションの場合は、毎月または毎年の契約更新日に決済が行われます。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3 border-b-2 border-slate-200 pb-2">
                  サービス提供時期
                </h2>
                <p className="text-slate-700">
                  決済完了後、即時に利用可能となります。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3 border-b-2 border-slate-200 pb-2">
                  返品・キャンセルについて
                </h2>
                <p className="text-slate-700 mb-2">
                  デジタルサービスの性質上、提供開始後の返品・返金には応じられません。
                </p>
                <p className="text-slate-700">
                  ただし本サービス側の障害により長期間利用できない場合など、当社が必要と判断した場合には別途対応を検討いたします。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3 border-b-2 border-slate-200 pb-2">
                  途中解約について（サブスクリプション）
                </h2>
                <p className="text-slate-700 mb-2">
                  利用期間途中で解約された場合でも返金は行っておりません。
                </p>
                <p className="text-slate-700">
                  解約後は次回以降の請求が停止されます。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3 border-b-2 border-slate-200 pb-2">
                  動作環境
                </h2>
                <p className="text-slate-700 mb-2">
                  インターネット接続環境および最新の Web ブラウザが必要です。
                </p>
                <p className="text-slate-700">
                  推奨環境は本サービスの案内ページに記載します。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3 border-b-2 border-slate-200 pb-2">
                  特別な販売条件
                </h2>
                <p className="text-slate-700">
                  特にありません。
                </p>
              </section>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
