'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Privacy() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section className="py-16 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              プライバシーポリシー
            </h1>
          </div>
        </section>

        <div className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="prose prose-slate max-w-none">

              <section className="mb-12">
                <p className="text-slate-600 mb-6">
                  株式会社Draftie（以下「当社」といいます。）は、当社が提供するサービス（以下「本サービス」といいます。）におけるユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます。）を定めます。
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">第1条（個人情報）</h2>
                <p className="text-slate-600 mb-4">
                  「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報及び容貌、指紋、声紋にかかるデータ、健康保険証の保険者番号その他の記述等により個人を識別できる情報（個人識別情報）を指します。
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">第2条（個人情報の収集方法）</h2>
                <p className="text-slate-600 mb-4">
                  当社は、ユーザーが利用登録をする際に氏名、メールアドレス、会社名、電話番号等の個人情報を取得することがあります。
                </p>
                <p className="text-slate-600 mb-4">
                  また、当社は以下の情報を取得する場合があります。
                </p>
                <ol className="list-decimal list-inside space-y-2 text-slate-600 ml-4">
                  <li>サービス利用に伴いユーザーが入力・アップロードする情報
                    <ul className="list-disc list-inside ml-6 mt-2">
                      <li>特許関連の文書、技術説明、テキスト、指示文等の入力データ</li>
                    </ul>
                  </li>
                  <li>Cookie・アクセスログ等により自動的に収集される情報
                    <ul className="list-disc list-inside ml-6 mt-2">
                      <li>IPアドレス、ブラウザ情報、端末情報、利用履歴、セッション情報等</li>
                    </ul>
                  </li>
                  <li>決済に関する情報
                    <ul className="list-disc list-inside ml-6 mt-2">
                      <li>当社が利用する決済サービス事業者が取得する情報（当社はクレジットカード番号等を直接取得しません）</li>
                    </ul>
                  </li>
                  <li>提携先から提供を受ける情報
                    <ul className="list-disc list-inside ml-6 mt-2">
                      <li>決済情報、利用者の取引記録等</li>
                    </ul>
                  </li>
                </ol>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">第3条（個人情報を収集・利用する目的）</h2>
                <p className="text-slate-600 mb-4">
                  当社は取得した個人情報を以下の目的で利用します。
                </p>
                <ol className="list-decimal list-inside space-y-2 text-slate-600 ml-4">
                  <li>本サービスの提供および運営のため</li>
                  <li>ユーザーが入力したデータをもとに AI による処理・解析を実行するため</li>
                  <li>本人確認、アカウント管理、認証のため</li>
                  <li>お問い合わせ対応、サポート提供のため</li>
                  <li>メンテナンス、重要なお知らせ、新機能等の案内のため</li>
                  <li>利用規約違反または不正・不当な行為の防止のため</li>
                  <li>サービス改善、新サービス開発のための利用状況分析のため</li>
                  <li>ユーザー自身の登録情報や利用状況の閲覧・管理のため</li>
                  <li>上記に付随する目的のため</li>
                </ol>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">第4条（利用目的の変更）</h2>
                <p className="text-slate-600 mb-4">
                  当社は、利用目的が変更前と合理的に関連性を有すると認められる場合に限り、個人情報の利用目的を変更するものとします。
                </p>
                <p className="text-slate-600 mb-4">
                  利用目的を変更した場合には、当社所定の方法により通知または公表します。
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">第5条（個人情報の第三者提供）</h2>
                <p className="text-slate-600 mb-4">
                  当社は、次に掲げる場合を除き、ユーザーの同意なく第三者に個人情報を提供することはありません。
                </p>
                <ol className="list-decimal list-inside space-y-2 text-slate-600 ml-4">
                  <li>人の生命、身体または財産の保護のために必要な場合</li>
                  <li>公衆衛生の向上または児童の健全な育成のために必要がある場合</li>
                  <li>国または地方公共団体等が法令の定める事務を遂行するため協力が必要な場合</li>
                  <li>個人情報保護法その他の法令により提供が認められる場合</li>
                  <li>次の事項を通知または公表し、個人情報保護委員会に届出を行った場合
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                      <li>第三者提供を利用目的に含むこと</li>
                      <li>提供される情報の項目</li>
                      <li>提供の手段または方法</li>
                      <li>本人の求めに応じて第三者提供を停止すること</li>
                      <li>本人の求めを受け付ける方法</li>
                    </ul>
                  </li>
                </ol>
                <p className="text-slate-600 mt-4">
                  また、サービス運営上必要な範囲で外部委託する場合、当社は委託先に対し適切な管理・監督を行います。
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">第6条（個人情報の開示）</h2>
                <p className="text-slate-600 mb-4">
                  以下の場合を除き、当社は本人からの開示請求に対して遅滞なく応じます。
                </p>
                <ol className="list-decimal list-inside space-y-2 text-slate-600 ml-4">
                  <li>本人または第三者の権利利益を害するおそれがある場合</li>
                  <li>当社の業務遂行に著しい支障を及ぼすおそれがある場合</li>
                  <li>法令に違反する場合</li>
                </ol>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">第7条（個人情報の訂正および削除）</h2>
                <p className="text-slate-600 mb-4">
                  ユーザーは、自らの個人情報について、訂正・追加・削除を請求できます。
                </p>
                <p className="text-slate-600 mb-4">
                  当社は、必要と認められる場合には遅滞なく対応します。
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">第8条（個人情報の利用停止等）</h2>
                <p className="text-slate-600 mb-4">
                  ユーザーは、利用目的外の利用または不正取得があった場合に、利用停止または消去を請求できます。
                </p>
                <p className="text-slate-600 mb-4">
                  当社は、法令に基づき必要な調査を行い、必要な措置を講じます。
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">第9条（Cookie等の利用）</h2>
                <p className="text-slate-600 mb-4">
                  当社は以下の目的で Cookie その他の類似技術を利用します。
                </p>
                <ol className="list-decimal list-inside space-y-2 text-slate-600 ml-4">
                  <li>利用者認証、セッション管理のため</li>
                  <li>利便性向上および利用状況の分析のため</li>
                </ol>
                <p className="text-slate-600 mt-4">
                  ブラウザ設定により Cookie を無効化できますが、一部機能が利用できなくなる場合があります。
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">第10条（外部サービスの利用）</h2>
                <p className="text-slate-600 mb-4">
                  当社は、本サービスの提供および改善のため、以下の外部サービスを利用する場合があります。
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
                  <li>決済サービス</li>
                  <li>アクセス解析ツール</li>
                  <li>AI モデル提供サービス</li>
                  <li>クラウドインフラサービス</li>
                </ul>
                <p className="text-slate-600 mt-4">
                  これら外部サービスに提供される情報は、各提供者のプライバシーポリシーに従って取り扱われます。
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">第11条（安全管理措置）</h2>
                <p className="text-slate-600 mb-4">
                  当社は、個人情報の漏えい、滅失またはき損を防ぐため、必要かつ適切な安全管理措置を講じます。
                </p>
                <p className="text-slate-600 mb-4">
                  また、目的達成後または保存期間経過後は、適切な方法で削除します。
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">第12条（プライバシーポリシーの変更）</h2>
                <p className="text-slate-600 mb-4">
                  当社は、法令に反しない範囲で、本ポリシーの内容を変更することができます。
                </p>
                <p className="text-slate-600 mb-4">
                  変更後のポリシーは、本ウェブサイトに掲載した時点から効力を生じます。
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">第13条（お問い合わせ窓口）</h2>
                <p className="text-slate-600 mb-4">
                  本ポリシーに関するお問い合わせは、以下の窓口までお願いいたします。
                </p>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <p className="text-slate-700 font-semibold mb-2">事業者名：株式会社Draftie</p>
                  <p className="text-slate-600 mb-1">所在地：東京都港区北青山1丁目3番1号　アールキューブ青山3階</p>
                  <p className="text-slate-600 mb-1">代表者：前田充宏</p>
                  <p className="text-slate-600">連絡先メール：info@draftie.ai</p>
                </div>
              </section>

              <section className="text-right text-slate-500 text-sm mt-12">
                <p>制定日：2025年11月1日</p>
              </section>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
